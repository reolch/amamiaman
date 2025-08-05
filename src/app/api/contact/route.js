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

    const { name, email, phone, message } = await request.json();

    // 入力検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
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
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            ${phone ? `<p><strong>電話番号:</strong> ${phone}</p>` : ''}
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

    // デバッグ用ログ（本番環境では削除推奨）
    console.log('Sending email to:', emailData.to);
    if (emailData.cc) console.log('CC:', emailData.cc);
    if (emailData.bcc) console.log('BCC:', emailData.bcc);

    const data = await resend.emails.send(emailData);

    return NextResponse.json({ 
      success: true, 
      id: data.id,
      recipients: {
        to: emailData.to,
        cc: emailData.cc || [],
        bcc: emailData.bcc || []
      }
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