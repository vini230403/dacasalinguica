import './Home.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        pagination={{ el: '.custom-pagination', clickable: true}}
        autoplay={{ delay: 5000, disableOnInteraction: false}}
        loop={true}
      >
        <SwiperSlide><img src="/img/banner_dacasa.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner2.jpg" alt="banner2" className='banner'/></SwiperSlide>
      </Swiper>
      <div className="controls-container">
        <div className="custom-prev"><FaChevronLeft /></div>
        <div className="custom-pagination"></div>
        <div className="custom-next"><FaChevronRight /></div>
      </div>
      <div>
        <h1 className='paixao'>Sabor autêntico em cada mordida, feito à mão com paixão!</h1>
        <div className='images'>
          <img src="/img/cerveja.jpg" alt="cerveja" className='cerveja'/>
          <img src="/img/geral.jpg" alt="geral" className='geral'/>
          <img src="/img/pimenta.jpg" alt="pimenta" className='pimenta'/>
        </div>
      </div>
      <NavLink to="/produtos" className="button">Venha conhecer nossos produtos</NavLink>
    </div>
  )
}

export default Home