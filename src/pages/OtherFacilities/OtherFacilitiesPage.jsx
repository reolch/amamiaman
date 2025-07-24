import styles from './OtherFacilitiesPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';

const OtherFacilitiesPage = () => {
  return (
    <main className={styles.section} aria-labelledby="lodging-page-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="lodging-page-heading" className={styles.title}>
          施設紹介
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            アクティビティ体験後にはシャワー室をご利用いただけます。
          </p>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <img src="/assets/images/pages/施設紹介/シャワー室.jpg" alt="奄美大島あまみあまんのマリンアクティビティ体験後に利用できる清潔なシャワー室" />
          </div>
          <div className={styles.imageItem}>
            <img src="/assets/images/pages/施設紹介/ロビー.jpg" alt="奄美大島あまみあまんの宿泊施設・くつろげるロビー空間" />
          </div>
        </div>

        {/* ソーシャルシェア */}
        <SocialShare />
      </div>
    </main>
  );
};

export default OtherFacilitiesPage;
