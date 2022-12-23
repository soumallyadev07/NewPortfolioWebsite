import React from 'react';
import "./inspirations.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';

const Inspirations = () => {
  return (
    <section className="inspiration container section">
      <h2 className="section__title">Inspirations</h2>
      <span className="section__subtitle">People I look up to</span>

      <Swiper className="inspiration__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({id, image, title, description}) => {
          return (
            <SwiperSlide className="inspiration__card" key={id}>
              <img src={image} alt="" className="inspiration__img" />

              <h3 className="inspiration__name">{title}</h3>
              <p className="inspiration__description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Inspirations