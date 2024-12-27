import React from 'react';
import s from './Manta.module.scss';
import 'swiper/css';

import { SwiperSlide, Swiper } from 'swiper/react';

import Card from '../Card/Card.jsx';
import Data from '../Tarifs/Data.js';

const Manta = () => {
  return (
    <>
      <section className={s.manta}>
        <div className="container">
          <div className={s.wraper}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
            >
              {Data.map(item => (
                <SwiperSlide key={item.title}>
                  <Card title={item.title} text={item.text} image={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manta;
