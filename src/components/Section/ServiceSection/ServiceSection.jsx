// src/components/Section/ServiceSection/ServiceSection.jsx
import Link from 'next/link';
import styles from './ServiceSection.module.css';
import PropTypes from 'prop-types';

const iconMap = {
  snorkelling: '/assets/icons/Snorkelling.svg',
  seakayak: '/assets/icons/seakayak.svg',
  glassboat: '/assets/icons/boat.svg',
  lodging: '/assets/icons/lodging.svg',
};

const ServiceCard = ({ type, title, description, link }) => {
  const iconSrc = iconMap[type];
  
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={iconSrc} alt={title} className={styles.icon} />
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
};

const ServiceSection = () => {
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
      link: '/seakayak',
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
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>サービス</h2>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <ServiceCard key={service.type} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
