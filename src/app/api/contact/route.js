import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// エラー通知をDiscordに送信する関数
const sendErrorToDiscord = async (error, formData) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('DISCORD_WEBHOOK_URL is not set. Skipping error notification.');
    return;
  }

  const errorMessage = error.message || 'An unknown error occurred';
  const errorName = error.name || 'N/A';

  // エラーオブジェクト全体を文字列化
  let errorDetailsString;
  try {
    errorDetailsString = `
${JSON.stringify(error, null, 2)}
`;
  } catch (e) {
    errorDetailsString = 'Failed to stringify the error object.';
  }
  
  // formDataがundefinedの場合のフォールバック
  const formDataString = formData ? `
${JSON.stringify(formData, null, 2)}
` : 'フォームデータを取得できませんでした。';

  const discordPayload = {
    username: 'エラー通知 - お問い合わせフォーム',
    avatar_url: 'https://www.marine-services-aman.com/logo.png',
    content: `**[警告] お問い合わせフォームでエラーが発生しました**`,
    embeds: [
      {
        title: 'エラー詳細',
        color: 15158332, // Red
        fields: [
          { name: 'エラー種別', value: errorName, inline: true },
          { name: 'エラーメッセージ', value: errorMessage, inline: false },
          { name: 'エラーオブジェクト全体', value: errorDetailsString, inline: false },
          { name: 'フォーム入力内容', value: formDataString, inline: false },
        ],
        footer: {
          text: 'ヤマハタマリンサービス公式サイト',
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
      console.error('Failed to send error to Discord:', response.status, await response.text());
    }
  } catch (discordError) {
    console.error('Error sending error notification to Discord:', discordError);
  }
};

// デバッグ用のGETメソッド
export async function GET() {
  return NextResponse.json({
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request) {
  let formDataForErrorHandling;

  try {
    const { name, email, phone, category, message, recaptchaToken } = await request.json();
    formDataForErrorHandling = { name, email, phone, category, message };

    // Resend API キーの確認
    if (!process.env.RESEND_API_KEY) {
      throw new Error('メール設定に問題があります: RESEND_API_KEY is not set');
    }

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
        throw new Error('reCAPTCHAの検証中にエラーが発生しました');
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

    // アドレスの処理
    const parseEmailList = (emailString) => {
      if (!emailString) return [];
      return emailString.split(',').map(email => email.trim()).filter(email => email);
    };

    const toEmails = parseEmailList(process.env.TO_EMAIL);

    console.log('TO_EMAIL from env:', process.env.TO_EMAIL);
    console.log('Parsed TO Emails:', toEmails);

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

    // Discord Webhookへの通知
    const sendToDiscord = async () => {
      const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
      if (!webhookUrl) {
        console.log('DISCORD_WEBHOOK_URL is not set. Skipping Discord notification.');
        return;
      }

      const discordPayload = {
        username: 'ヤマハタマリンサービス お問い合わせ通知',
        avatar_url: 'https://www.marine-services-aman.com/logo.png',
        content: `新しいお問い合わせがありました。
**お名前:** ${name}
**メールアドレス:** ${email}
**電話番号:** ${phone}
**お問い合わせ内容:**
${message}`,
        embeds: [
          {
            title: 'お問い合わせ詳細',
            color: 3447003,
            fields: [
              { name: 'お問い合わせ項目', value: category, inline: false },
              { name: 'お名前', value: name, inline: false },
              { name: 'メールアドレス', value: email, inline: false },
              { name: '携帯電話番号', value: phone || '未入力', inline: false },
              { name: 'お問い合わせ内容', value: message, inline: false }
            ],
            footer: {
              text: 'ヤマハタマリンサービス公式サイト',
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

    // Resendの結果をチェック
    if (emailResult.status === 'fulfilled') {
      const { data, error } = emailResult.value;
      if (error) {
        // Resendからエラーが返された場合
        throw error;
      }
      // 成功した場合
      return NextResponse.json({
        success: true,
        id: data.id,
        recipients: {
          to: emailData.to,
        },
      });
    } else {
      // Promiseがrejectedされた場合（ネットワークエラーなど）
      throw emailResult.reason;
    }
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Discordにエラーを通知
    await sendErrorToDiscord(error, formDataForErrorHandling);

    return NextResponse.json(
      {
        error: 'メール送信に失敗しました',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}