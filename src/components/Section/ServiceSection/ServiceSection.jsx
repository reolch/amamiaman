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
  lodging: 'あまみあまん宿泊施設サービスアイコン',
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
      title: 'シュノーケリング',
      description: '透明度抜群の海で熱帯魚と泳ごう',
      link: '/snorkelling',
    },
    {
      type: 'seakayak',
      title: 'シーカヤック',
      description: '手つかずの自然を探検しよう',
      link: '/seaKayak',
    },
    {
      type: 'glassboat',
      title: 'グラスボート',
      description: '美しいサンゴ礁の世界へ',
      link: '/glassboat',
    },
    {
      type: 'lodging',
      title: '宿泊施設',
      description: 'ゆったりとくつろげる空間',
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
          サービス
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
