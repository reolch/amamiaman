// src/components/NewsSection/NewsSection.jsx
import React from 'react';
import styles from './NewsSection.module.css';
import newsData from './newsData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { format, parseISO } from 'date-fns';
import ja from 'date-fns/locale/ja';
import PropTypes from 'prop-types';



const NewsItem = ({ id, title, date, description, imageUrl }) => {
  const formattedDate = format(parseISO(date), 'yyyy年MM月dd日', { locale: ja });

  return (
    <article className={styles.newsItem} aria-labelledby={`news-title-${id}`}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className={styles.newsImage} loading="lazy" />
      )}
      <div className={styles.newsDate}>{formattedDate}</div>
      <h3 id={`news-title-${id}`} className={styles.newsTitle}>
        {title}
      </h3>
      <p className={styles.newsDescription}>{description}</p>
    </article>
  );
};

NewsItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

const NewsSection = () => {
  return (
    <section className={styles.newsSection} aria-labelledby="news-section-title">
      <h2 id="news-section-title" className={styles.title}>
        最新ニュース
      </h2>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
          aria-label="最新ニュースのカルーセル"
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id} className={styles.swiperSlide}>
              <NewsItem
                id={news.id}
                title={news.title}
                date={news.date}
                description={news.description}
                imageUrl={news.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSection;
