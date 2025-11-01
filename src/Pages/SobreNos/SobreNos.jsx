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
        <section className='py-6 px-4' id='sobrenos'>
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="text-center mb-12">
                    <h1 className='title text-4xl md:text-5xl text-[var(--text-color)] mb-4'>Nossa História</h1>
                    <p className='subtitle text-lg md:text-xl text-[var(--secondary-color)] max-w-2xl mx-auto leading-relaxed'>
                        Conheça a tradição e paixão por trás de cada linguiça artesanal
                    </p>
                </div>
            </div>

            {/* Texto de Apresentação */}
            <div className='max-w-4xl mx-auto mb-16'>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[var(--border-color)]">
                    <div className='flex flex-col gap-6 text-left'>
                        <p className='subtitle text-lg md:text-xl leading-relaxed text-[var(--secondary-color)]'>
                            <strong className="text-[var(--text-color)]">Bem-vindo à Da Casa, o Sabor da Tradição Artesanal</strong> - a nova referência em linguiças artesanais!
                        </p>
                        <p className='subtitle text-lg md:text-xl leading-relaxed text-[var(--secondary-color)]'>
                            Na Da Casa, combinamos tradição e qualidade para oferecer linguiças feitas à mão, com ingredientes selecionados e temperos especiais.
                        </p>
                        <p className='subtitle text-lg md:text-xl leading-relaxed text-[var(--secondary-color)]'>
                            Nossos produtos são perfeitos para churrascos, petiscos e receitas especiais, garantindo sempre frescor e sabor incomparáveis.
                        </p>
                        <p className='subtitle text-lg md:text-xl leading-relaxed text-[var(--secondary-color)]'>
                            Venha conhecer e se surpreender com a verdadeira experiência da linguiça artesanal!
                        </p>
                    </div>
                </div>
            </div>

            {/* Nossa Cozinha */}
            <div className='max-w-7xl mx-auto mb-16'>
                <div className="text-center mb-8">
                    <h2 className='title text-3xl md:text-4xl text-[var(--text-color)] mb-4'>
                        Onde a Magia Acontece
                    </h2>
                    <p className='subtitle text-lg text-[var(--secondary-color)] max-w-2xl mx-auto'>
                        Conheça nosso espaço de trabalho onde cada linguiça é preparada com cuidado e dedicação
                    </p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border-[4px] border-[var(--text-color)]">
                        <img 
                            src="/cozinha1.jpg" 
                            alt="Cozinha da Da Casa" 
                            className='w-auto h-56 md:h-full brightness-110 contrast-110'
                        />
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border-[4px] border-[var(--text-color)]">
                        <img 
                            src="/cozinha2.jpg" 
                            alt="Cozinha da Da Casa" 
                            className='w-auto h-56 md:h-full object-cover brightness-110 contrast-110'
                        />
                    </div>
                </div>
            </div>

            {/* Ingredientes - CARROSSEL MANTIDO ORIGINAL */}
            <div className='flex flex-col items-center justify-center gap-8 mb-8'>
                <h2 className='title text-2xl md:text-3xl font-bold text-[var(--text-color)]'>
                    Um pouco dos nossos ingredientes
                </h2>
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

            {/* Modo de Preparo */}
            <div className='max-w-4xl mx-auto'>
                <div className="text-center mb-8">
                    <h2 className='title text-3xl md:text-4xl text-[var(--text-color)] mb-4'>
                        Arte em Cada Detalhe
                    </h2>
                    <p className='subtitle text-lg text-[var(--secondary-color)] max-w-2xl mx-auto'>
                        Nosso processo artesanal garante sabor e qualidade únicos
                    </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[var(--border-color)]">
                    <video 
                        muted 
                        controls 
                        className='w-full rounded-xl border-4 border-[var(--text-color)] shadow-md'
                    >
                        <source src="/video_fabricacao.mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </div>
        </section>
    )
}

export default SobreNos