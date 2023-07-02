import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import g1 from "./glass2.jpg"
import g2 from "./sunsetGlass.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation,Pagination,HashNavigation } from "swiper";

export default function Sliders() {
  return (
    <>
      <Swiper spaceBetween={10} navigation={true} modules={[Pagination, Navigation, HashNavigation]} className="mySwiper">
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Dec22/blend-edit/web.jpg" height={"200px"} alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Nov22/airplay/desk-play.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif" alt=""/></SwiperSlide>
        
      </Swiper>
    </>
  );
}