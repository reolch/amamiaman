// src/components/Section/ServiceSection/ServiceSection.jsx
import React from 'react';
import styles from './ServiceSection.module.css';
import PropTypes from 'prop-types';

import { ReactComponent as SnorkellingIcon } from '../../../assets/icons/Snorkelling.svg';
import { ReactComponent as SeakayakIcon } from '../../../assets/icons/seakayak.svg';
import { ReactComponent as GlassboatIcon } from '../../../assets/icons/boat.svg';
import { ReactComponent as LodgingIcon } from '../../../assets/icons/lodging.svg';

const iconMap = {
  snorkelling: SnorkellingIcon,
  seakayak: SeakayakIcon,
  glassboat: GlassboatIcon,
  lodging: LodgingIcon,
};

const services = [
  {
    icon: 'snorkelling',
    name: 'シュノーケリング',
    description: '美しいサンゴ礁の海でシュノーケリングを楽しめます。',
    link: '/snorkelling',
  },
  {
    icon: 'seakayak',
    name: 'シーカヤック',
    description: 'シーカヤックで海を探索し、新たな発見を。',
    link: '/seakayak',
  },
  {
    icon: 'glassboat',
    name: 'グラスボート',
    description: 'グラスボートで海底の世界を覗いてみませんか？',
    link: '/glassboat',
  },
  {
    icon: 'lodging',
    name: '民宿',
    description: 'ゆったりと過ごせる快適な民宿をご用意しています。',
    link: '/lodging',
  },
];

const ServiceCard = ({ icon, name, description, link }) => {
  const IconComponent = iconMap[icon];
  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconWrapper}>
        <IconComponent className={styles.icon} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.link}>
        詳しく見る
      </a>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const ServiceSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>サービス</h2>
      <div className={styles.cards}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            name={service.name}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
