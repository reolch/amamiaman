import styles from './ContactPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';

const ContactPage = () => {

  return (
    <main className={styles.section} aria-labelledby="contact-page-heading">
      <div className={styles.container}>
        <h1 id="contact-page-heading" className={styles.title}>
          Contact
        </h1>
        
        <p className={styles.description}>
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
        </p>

        <form 
          action="https://ssgform.com/s/77rMhuyzTHRI" 
          method="post" 
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="お名前"
              required
              className={styles.input}
              aria-required="true"
              placeholder="お名前"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="メールアドレス"
              required
              className={styles.input}
              aria-required="true"
              placeholder="メールアドレス"
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="メッセージ"
              required
              className={styles.textarea}
              aria-required="true"
              placeholder="メッセージ"
              rows="5"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.button}
            aria-label="フォームを送信する"
          >
            送信する
          </button>
        </form>
      </div>
      <SocialShare />
    </main>
  );
};

export default ContactPage;