'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ContactPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaRef = useRef(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', category: '', message: '' });
        recaptchaRef.current.reset();
        setRecaptchaToken('');
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.section} aria-labelledby="contact-page-heading">
      <div className={styles.container}>
        <h1 id="contact-page-heading" className={styles.title}>
          Contact
        </h1>

        <p className={styles.description}>
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
        </p>

        {submitStatus === 'success' && (
          <div className={styles.successMessage}>
            <p>お問い合わせありがとうございます。メッセージを送信いたしました。</p>
            <p>お返事までしばらくお待ちください。</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={styles.errorMessage}>
            <p>申し訳ございません。送信に失敗しました。</p>
            <p>しばらく時間をおいて再度お試しください。</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={styles.input}
              aria-required="true"
              disabled={isSubmitting}
            >
              <option value="" disabled>お問い合わせ項目を選択してください</option>
              <option value="宿泊について">宿泊について</option>
              <option value="マリンアクティビティについて">マリンアクティビティについて</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              aria-required="true"
              placeholder="お名前"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              aria-required="true"
              placeholder="メールアドレス"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="携帯電話番号"
              required
              aria-required="true"
              pattern="^\d{10,11}$|^\d{3}-\d{3,4}-\d{4}$"
              title="ハイフンなしの10桁または11桁、あるいはハイフンありの形式で入力してください。"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              aria-required="true"
              placeholder="メッセージ"
              rows="5"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.button}
            aria-label="フォームを送信する"
            disabled={isSubmitting || !recaptchaToken}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>

          <div className={styles.recaptchaContainer}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
              onChange={handleRecaptchaChange}
            />
          </div>
        </form>
      </div>
      <SocialShare />
    </main>
  );
};

export default ContactPage;