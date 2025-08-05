import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// デバッグ用のGETメソッド
export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request) {
  try {
    // Resend API キーの確認
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'メール設定に問題があります' },
        { status: 500 }
      );
    }

    const { name, email, phone, category, message, recaptchaToken } = await request.json();

    // reCAPTCHAの検証
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
      try {
        const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
        const recaptchaData = await recaptchaResponse.json();
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          return NextResponse.json({ error: 'reCAPTCHAの検証に失敗しました' }, { status: 400 });
        }
      } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return NextResponse.json({ error: 'reCAPTCHAの検証中にエラーが発生しました' }, { status: 500 });
      }
    }

    // 入力検証
    if (!name || !email || !category || !phone || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // お問い合わせ項目のバリデーション
    const allowedCategories = ['宿泊について', 'マリンアクティビティについて', 'その他'];
    if (!allowedCategories.includes(category)) {
      return NextResponse.json(
        { error: 'お問い合わせ項目が正しくありません' },
        { status: 400 }
      );
    }

    // 携帯電話番号のバリデーション
    const phoneRegex = /^(\d{10,11}|\d{3}-\d{3,4}-\d{4})$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: '携帯電話番号の形式が正しくありません' },
        { status: 400 }
      );
    }

    // CC/BCCアドレスの処理
    const parseEmailList = (emailString) => {
      if (!emailString) return [];
      return emailString.split(',').map(email => email.trim()).filter(email => email);
    };

    const toEmails = parseEmailList(process.env.TO_EMAIL);
    const ccEmails = parseEmailList(process.env.CC_EMAIL);
    const bccEmails = parseEmailList(process.env.BCC_EMAIL);

    console.log('TO_EMAIL from env:', process.env.TO_EMAIL);
    console.log('Parsed TO Emails:', toEmails);
    console.log('CC_EMAIL from env:', process.env.CC_EMAIL);
    console.log('BCC_EMAIL from env:', process.env.BCC_EMAIL);
    console.log('Parsed CC Emails:', ccEmails);
    console.log('Parsed BCC Emails:', bccEmails);

    // メール送信
    const emailData = {
      from: process.env.FROM_EMAIL || 'contact@marine-services-aman.com',
      to: toEmails.length > 0 ? toEmails : ['info@marine-services-aman.com'],
      subject: 'ヤマハタマリンサービスあまん お問い合わせ',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            新しいお問い合わせ
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>お問い合わせ項目:</strong> ${category}</p>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            ${phone ? `<p><strong>携帯電話番号:</strong> ${phone}</p>` : ''}
            <p><strong>送信日時:</strong> ${new Date().toLocaleString('ja-JP')}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">メッセージ内容:</h3>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">
${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>このメールはヤマハタマリンサービスあまんのウェブサイトから送信されました</p>
          </div>
        </div>
      `,
    };

    // CC/BCCを追加（存在する場合のみ）
    if (ccEmails.length > 0) {
      emailData.cc = ccEmails;
    }
    if (bccEmails.length > 0) {
      emailData.bcc = bccEmails;
    }

    // Discord Webhookへの通知
    const sendToDiscord = async () => {
      const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
      if (!webhookUrl) {
        console.log('DISCORD_WEBHOOK_URL is not set. Skipping Discord notification.');
        return;
      }

      const discordPayload = {
        username: 'あまみあまん お問い合わせ通知',
        avatar_url: 'https://www.marine-services-aman.com/logo.png',
        embeds: [
          {
            title: 'ウェブサイトから新しいお問い合わせがありました',
            color: 3447003, // Blue
            fields: [
              { name: 'お問い合わせ項目', value: '```' + category + '```', inline: false },
              { name: 'お名前', value: '```' + name + '```', inline: false },
              { name: 'メールアドレス', value: '```' + email + '```', inline: false },
              { name: '携帯電話番号', value: '```' + (phone || '未入力') + '```', inline: false },
              { name: 'メッセージ内容', value: '```' + message + '```', inline: false },
            ],
            footer: {
              text: 'あまみあまん公式サイト',
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordPayload),
        });
        if (!response.ok) {
          console.error('Failed to send to Discord:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error sending to Discord:', error);
      }
    };

    // メール送信とDiscord通知を並行して実行
    const [emailResult, discordResult] = await Promise.allSettled([
      resend.emails.send(emailData),
      sendToDiscord(),
    ]);

    if (emailResult.status === 'rejected') {
      console.error('Email sending failed:', emailResult.reason);
      // Discordへの通知が成功していても、メール送信の失敗をクライアントに通知する
      throw emailResult.reason;
    }

    return NextResponse.json({
      success: true,
      id: emailResult.value.id,
      recipients: {
        to: emailData.to,
        cc: emailData.cc || [],
        bcc: emailData.bcc || [],
      },
    });
  } catch (error) {
    console.error('Form submission error:', error);
    console.error('Error details:', error.message);
    return NextResponse.json(
      { 
        error: 'メール送信に失敗しました',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}