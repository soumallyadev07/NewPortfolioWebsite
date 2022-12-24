import React from 'react';
import "./inspirations.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const Inspirations = () => {
  return (
    <section className="inspiration container section" id="tunes">
      <h2 className="section__title">My Favourite Songs</h2>
      <span className="section__subtitle">Where words leave off, music begins.</span>

      <Swiper className="inspiration__container"
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 5800 }}
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
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({id, image, artistImage, title, artist, description, link, artistLink}) => {
          return (
            <SwiperSlide className="inspiration__card" key={id}>
              <div>
                <img src={image} alt="" className="inspiration__img" />
                <a href={artistLink} target="_blank" rel="noreferrer"><img src={artistImage} alt="" className="inspiration__img-artist" /></a>
              </div>

              <a href={link} target="_blank" className='spotifyLink' rel="noreferrer"><h3 className="inspiration__name"><i className="bx bxl-spotify"></i> {title}</h3></a>
              <p className="inspiration__description">
                by <a href={artistLink} target="_blank" rel="noreferrer"><span className="artistName">{artist}</span></a>
              </p>
              <p className="inspiration__description-small">
                "{description}"
              </p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Inspirations