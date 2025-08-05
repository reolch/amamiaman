import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // 入力検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メール送信
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@marine-services-aman.com',
      to: [process.env.TO_EMAIL || 'info@marine-services-aman.com'],
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
    });

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
}