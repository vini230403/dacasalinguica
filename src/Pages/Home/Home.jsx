import "../../App.css"
import "./Home.css"

import { useRef } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Home() {

    const swiperRef = useRef(null);

    const carouselImages = [
        { id: 1, src: '/banner_dacasa.jpg', alt: 'Banner da casa' },
        { id: 2, src: '/banner2.jpg', alt: 'Banner da casa com mascote' },
        { id: 3, src: 'banner_dacasa.jpg', alt: 'Banner da casa' },
    ]

  return (
    <section className="flex flex-col items-center" id="#">
        <h1 className="title text-4xl md:text-5xl text-center mt-5 mb-5 font-bold text-[var(--text-color)]">
            Da casa apresenta
        </h1>

        {/* Swiper com Tailwind CSS */}
        <div className="mx-auto w-full max-w-2xl">
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                pagination={{ 
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full max-w-[320px] md:max-w-[600px] rounded-lg border-[6px] border-[var(--text-color)] overflow-hidden shadow-lg"
            >
                {carouselImages.map((image) => (
                <SwiperSlide key={image.id} className="flex justify-center items-center">
                    <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Paginação */}
            <div className="custom-pagination"></div>
        </div>

        <h3 className="subtitle text-lg md:text-2xl text-center font-bold mt-4 mb-6 max-w-xs md:max-w-lg text-[var(--title-color)]">
            Descubra a qualidade e o sabor autêntico dos nossos produtos, feitos com carinho e ingredientes selecionados.
        </h3>

        <div className="flex justify-center items-center rounded-lg border-[6px] border-[var(--text-color)] mt-4 mb-12">
            <img src="/cerveja.jpg" alt="cerveja" className="w-25 md:w-50 h-auto rounded-sm" />
            <img src="/geral.jpg" alt="geral" className="w-25 md:w-50 h-auto" />
            <img src="/pimenta.jpg" alt="pimenta" className="w-25 md:w-50 h-auto rounded-sm" />
        </div>

        <div className="divider-1"></div>        

    </section>
  )
}

export default Home