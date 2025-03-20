import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
        <SwiperSlide><img src="/public/img/banner_dacasa.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide><img src="/public/img/cortada.jpg" alt="cortada" /></SwiperSlide>
      </Swiper>
      <div className="controls-container">
        <div className="custom-prev"><FaChevronLeft /></div>
        <div className="custom-pagination"></div>
        <div className="custom-next"><FaChevronRight /></div>
      </div>
      <div className='texto'>
        <h1>Sabor autêntico em cada mordida, feito à mão com paixão!</h1>
        <img src="/public/img/novidades.png" alt="novidade" className='img-center' />
      </div>
    </div>
  )
}

export default Home