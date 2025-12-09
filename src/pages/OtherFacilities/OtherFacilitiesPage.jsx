import styles from './OtherFacilitiesPage.module.css';
import Image from 'next/image';
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
            <Image
              src="/assets/images/pages/施設紹介/シャワー室.webp"
              alt="ヤマハタマリンサービスのマリンアクティビティ体験後に利用できる清潔なシャワー室"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/assets/images/pages/施設紹介/ロビー.webp"
              alt="ヤマハタマリンサービスの宿泊施設・くつろげるロビー空間"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ソーシャルシェア */}
        <SocialShare />
      </div>
    </main>
  );
};

export default OtherFacilitiesPage;
