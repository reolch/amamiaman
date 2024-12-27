// src/components/ContactPage/ContactPage.jsx
import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 入力値の検証
    if (!formData.name || !formData.email || !formData.message) {
      alert('必須項目が入力されていません。');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://rw0jox92if.execute-api.ap-northeast-1.amazonaws.com/default/amamiaman', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '送信に失敗しました');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      alert(error.message || 'エラーが発生しました。もう一度お試しください。');
      console.error('送信エラー:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.section} aria-labelledby="contact-page-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="contact-page-heading" className={styles.title}>
          お問い合わせ
        </h1>

        {isSubmitted ? (
          <div className={styles.successMessage}>
            <p>フォームが送信されました！</p>
            <p>お問い合わせありがとうございます。</p>
          </div>
        ) : (
          /* フォームセクション */
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                aria-required="true"
                placeholder="山田 太郎"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                aria-required="true"
                placeholder="example@email.com"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                aria-required="true"
                placeholder="お問い合わせ内容をご記入ください"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        )}

        {/* フッターノート */}
        <FooterNote text="お問い合わせいただいてから、2営業日以内にご返信いたします。" />
      </div>
      {/* ソーシャルシェア */}
      <SocialShare />
    </main>
  );
};

export default ContactPage;
