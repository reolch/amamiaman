import { useState } from 'react';
import styles from './ContactPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
              placeholder="電話番号（任意）"
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
            disabled={isSubmitting}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </form>
      </div>
      <SocialShare />
    </main>
  );
};

export default ContactPage;