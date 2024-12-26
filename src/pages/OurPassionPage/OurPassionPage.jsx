// src/components/OurPassion/OurPassionPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './OurPassionPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';

// 画像をインポート
import passionImage1 from '../../assets/images/IMG_0810.jpg';
import passionImage2 from '../../assets/images/912.jpg';
import passionImage3 from '../../assets/images/IMG_0798.jpg';

/**
 * OurPassionPage コンポーネント
 *
 * 当店の情熱を紹介するページ。複数の情熱ブロックを表示し、各ブロックはタイトル、内容、画像を含む。
 */
const OurPassionPage = () => {
  // 情熱ブロックのデータを配列として定義
  const passionBlocks = [
    {
      id: 1,
      title: 'お客様に合わせたコースのご案内',
      content:
        '当店は、お客様が体験したいコースを好きなように、好きな時間で予約していただくことができます。シュノーケリングを1日中楽しんだり、シュノーケリングの後にグラスボートを楽しんだりと、その日の予定に合わせてご案内しています。また、当日の天候により体験が難しいコースがあったときなど変更することも可能です。',
      image: passionImage1,
      reverse: false,
    },
    {
      id: 2,
      title: 'マリンスポーツについて',
      content:
        'お客様のレベルに合わせて、どのように楽しむか、どんな風に行うのかなど、皆様に満足していただけるよう、ご提案などもしています。初心者の方から、上級者の方まで安心して楽しんでいただけます。また、小さなお子様は小学生からのご利用とさせていただいています。小学生以下のお子様は要相談となっていますので、お気軽にご相談ください。',
      image: passionImage2,
      reverse: true,
    },
    {
      id: 3,
      title: '思い出を写真に残します！',
      content:
        '当店でマリンスポーツをより楽しんでいただけるよう、お客様に防水カメラをお貸ししています。シュノーケリングの際など、是非、カメラをお使いください。体験を終え、シャワーをご利用されている際に、撮っていただいた写真をCDへ焼き、皆様へ旅の思い出として1組に1枚、お渡ししています。',
      image: passionImage3,
      reverse: false,
    },
  ];

  // アニメーションのバリアントを定義（フェードインとスライドアップ）
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        {passionBlocks.map((block, index) => (
          <motion.section
            key={block.id}
            className={`${styles.passionBlock} ${block.reverse ? styles.reverse : ''}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className={styles.textColumn}>
              <h2 className={styles.heading}>{block.title}</h2>
              <p className={styles.paragraph}>{block.content}</p>
            </div>
            <figure className={styles.imageColumn}>
              <img
                src={block.image}
                alt={block.title}
                loading="lazy"
                className={styles.image}
              />
            </figure>
          </motion.section>
        ))}
        <SocialShare />
      </div>
    </main>
  );
};

export default OurPassionPage;
