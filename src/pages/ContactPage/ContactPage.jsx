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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('フォームが送信されました！');
    // ここにフォーム送信のロジックを追加できます（例: APIへのPOSTリクエスト）
    // フォーム送信後、フォームデータをリセットする場合は以下を追加
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <main className={styles.section} aria-labelledby="contact-page-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="contact-page-heading" className={styles.title}>
          お問い合わせ
        </h1>

        {/* フォームセクション */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              お名前:
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
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              メールアドレス:
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
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              メッセージ:
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
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            送信
          </button>
        </form>

        {/* フッターノート */}
        <FooterNote text="表記価格は税込です。" />
      </div>
      {/* ソーシャルシェア */}
      <SocialShare />
    </main>
  );
};

export default ContactPage;
