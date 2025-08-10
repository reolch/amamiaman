'use client';

// src/components/Section/ServiceSection/ServiceSection.jsx
import Link from 'next/link';
import styles from './ServiceSection.module.css';
import PropTypes from 'prop-types';
import useParallax from '../../../hooks/useParallax';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const iconMap = {
  snorkelling: '/assets/icons/Snorkelling.svg',
  seakayak: '/assets/icons/seakayak.svg',
  glassboat: '/assets/icons/boat.svg',
  lodging: '/assets/icons/lodging.svg',
};

const altMap = {
  snorkelling: '奄美大島シュノーケリング体験アクティビティアイコン',
  seakayak: '奄美大島シーカヤック体験アクティビティアイコン',
  glassboat: '奄美大島グラスボート体験アクティビティアイコン',
  lodging: 'ヤマハタマリンサービス宿泊施設サービスアイコン',
};

const ServiceCard = ({ type, title, description, link, index }) => {
  const iconSrc = iconMap[type];
  const iconAlt = altMap[type];
  const [cardRef, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [parallaxRef, parallaxOffset] = useParallax(0.3);
  
  return (
    <div 
      ref={(el) => {
        cardRef.current = el;
        parallaxRef.current = el;
      }}
      className={`${styles.card} ${hasIntersected ? styles.cardVisible : styles.cardHidden}`}
      style={{
        '--parallax-offset': `${parallaxOffset}px`,
        '--animation-delay': `${index * 0.1}s`
      }}
    >
      <div className={styles.iconWrapper}>
        <img src={iconSrc} alt={iconAlt} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={link} className={styles.link}>
        詳しく見る
      </Link>
    </div>
  );
};

ServiceCard.propTypes = {
  type: PropTypes.oneOf(['snorkelling', 'seakayak', 'glassboat', 'lodging']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const ServiceSection = () => {
  const [sectionRef, , hasSectionIntersected] = useIntersectionObserver();
  const [backgroundRef, backgroundOffset] = useParallax(0.5);
  
  const services = [
    {
      type: 'snorkelling',
      title: '奄美大島 シュノーケリング',
      description: '透明度抜群の海で、色とりどりの熱帯魚とサンゴ礁を楽しもう。',
      link: '/snorkelling',
    },
    {
      type: 'seakayak',
      title: '奄美大島 シーカヤック',
      description: '加計呂麻島周辺の穏やかな海で、手つかずの自然を探検。',
      link: '/seaKayak',
    },
    {
      type: 'glassboat',
      title: '奄美大島 グラスボート',
      description: '服を着たまま気軽に楽しめる、美しいサンゴ礁の水中世界へ。',
      link: '/glassboat',
    },
    {
      type: 'lodging',
      title: '宿泊施設',
      description: 'マリンスポーツの後は、ゆったりとくつろげる空間でリラックス。',
      link: '/lodging',
    },
  ];

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el;
        backgroundRef.current = el;
      }}
      className={styles.section}
      style={{
        '--background-offset': `${backgroundOffset}px`
      }}
    >
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${hasSectionIntersected ? styles.titleVisible : styles.titleHidden}`}>
          奄美大島で体験できるサービス
        </h2>
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <ServiceCard key={service.type} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
