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

    const highlights = [
        {
            img: "/cerveja.jpg",
            title: "Para Churrascos",
            description: "Perfeita para reunir amigos e família"
        },
        {
            img: "/geral.jpg", 
            title: "Variedade Premium", 
            description: "Diversos sabores artesanais"
        },
        {
            img: "/pimenta.jpg",
            title: "Sabores Únicos",
            description: "Temperos especiais e receitas exclusivas"
        }
    ]

  return (
    <section className="flex flex-col items-center" id="#">
        {/* Swiper com Tailwind CSS - MANTIDO ORIGINAL */}
        <div className="mx-auto w-full max-w-4xl mt-4 mb-6">
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
                className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] rounded-lg border-[6px] border-[var(--text-color)] overflow-hidden shadow-lg"
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

        {/* Slogan - NOVO ESTILO (como você gostou) */}
        <div className="max-w-7xl mx-auto mb-8 px-4">
            <div className="text-center mb-8">
                <h2 className="title text-3xl md:text-4xl text-[var(--text-color)] mb-4">
                    Por que escolher nossas linguiças?
                </h2>
                <p className="subtitle text-lg md:text-xl text-[var(--secondary-color)] max-w-2xl mx-auto leading-relaxed">
                    Descubra a qualidade e o sabor autêntico dos nossos produtos, 
                    feitos com carinho e ingredientes selecionados.
                </p>
            </div>
        </div>

        {/* Cards - HORIZONTAL MOBILE / VERTICAL DESKTOP */}
<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 px-4 w-full max-w-4xl mx-auto">
    {highlights.map((item, index) => (
        <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-[var(--border-color)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-row md:flex-col w-full md:w-64 lg:w-80 min-h-[140px] md:min-h-0"
        >
            {/* Imagem */}
            <div className="relative w-32 md:w-full h-60 md:h-120 overflow-hidden flex-shrink-0">
                <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full object-cover brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-transparent to-black/20"></div>
            </div>
            
            {/* Texto */}
            <div className="p-4 flex-1 flex flex-col justify-center min-w-[120px] md:min-w-0">
                <h3 className="font-serif text-base md:text-lg lg:text-xl font-bold text-[var(--text-color)] mb-2 text-center md:text-center">
                    {item.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--secondary-color)] leading-tight text-center md:text-center">
                    {item.description}
                </p>
            </div>
        </div>
    ))}
</div>

    </section>
  )
}

export default Home