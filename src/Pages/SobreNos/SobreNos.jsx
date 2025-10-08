import './Sobrenos.css'

import { useRef } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const SobreNos = () => {

    const swiperRef = useRef(null);

    const ingredientImages = [
        { id: 1, src: "/ingredientes1.jpg", alt: "Ingrediente 1" },
        { id: 2, src: "/ingredientes2.jpg", alt: "Ingrediente 2" },
        { id: 3, src: "/ingredientes3.jpg", alt: "Ingrediente 3" },
    ]

  return (
    <section className='text-center' id='sobrenos'>
        <h1 className='title text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-10'>Sobre Nós</h1>

        <div className='flex flex-col gap-4 max-w-3xl md:max-w-2xl mx-auto mb-12 px-4'>
            <p className='subtitle text-center text-lg md:text-xl'>Bem-vindo à Da Casa, o Sabor da Tradição Artesanal, chegou a nova referência em linguiças artesanais!</p>
            <p className='subtitle text-center text-lg md:text-xl'>Na Da Casa, combinamos tradição e qualidade para oferecer linguiças feitas à mão, com ingredientes selecionados e temperos especiais.</p>
            <p className='subtitle text-center text-lg md:text-xl'>Nossos produtos são perfeitos para churrascos, petiscos e receitas especiais, garantindo sempre frescor e sabor incomparáveis.</p>
            <p className='subtitle text-center text-lg md:text-xl'>Venha conhecer e se surpreender com a verdadeira experiência da linguiça artesanal!</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 mb-8'>
            <h2 className='title text-2xl md:text-3xl font-bold text-[var(--text-color)]'>
                Onde trabalhamos
            </h2>
            <img src="/cozinha1.jpg" alt="Cozinha da Da Casa" className='h-auto w-80 md:w-180 rounded-lg border-[6px] border-[var(--text-color)]' />
            <img src="/cozinha2.jpg" alt="Cozinha da Da Casa" className='h-auto w-80 md:w-180 rounded-lg border-[6px] border-[var(--text-color)]' />
        </div>
        <div className='flex flex-col items-center justify-center gap-8 mb-8'>
            <h2 className='title text-2xl md:text-3xl font-bold text-[var(--text-color)]'>
                Um pouco dos nossos ingredientes
            </h2>
            {/* Carrossel de Imagens */}
          <div className="h-auto w-70 md:w-120">
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              pagination={{ 
                clickable: true,
                el: '.custom-pagination2',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-lg border-[6px] border-[var(--text-color)] overflow-hidden shadow-lg"
            >
              {ingredientImages.map((image) => (
                <SwiperSlide key={image.id} className='flex justify-center items-center'>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination2"></div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 mb-12'>
            <h2 className='title text-2xl md:text-3xl font-bold text-[var(--text-color)]'>
                Nosso modo de preparo
            </h2>
            <video muted controls className='w-70 md:w-120 rounded-lg border-[6px] border-[var(--text-color)]'>
                <source src="/video_fabricacao.mp4"  />
            </video>
        </div>
    </section>
  )
}

export default SobreNos