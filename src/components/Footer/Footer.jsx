import "../../App.css"

import { IoLogoInstagram, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io"




const Footer = () => {
  return (
    <footer className="
        bg-[var(--secondary-color)]
        text-white
        py-8
        px-8
        shadow-lg
        2xl:px-6"
    >
        <div className="container mx-auto ">
            {/* Conteúdo em 3 colunas (mobile: empilhadas) */}
            <div className="flex flex-col md:flex-row gap-8 justify-between">
            
            {/* Coluna 1 - Logo */}
            <div className="flex flex-col items-center md:items-center">
                <img 
                src="/logo.svg" 
                alt="Logo da empresa" 
                title="Logo da empresa"
                className="logo h-auto mb-4 w-24"
                />
                <p className="text-white text-md text-center">
                    Sabor autêntico em cada mordida, <br /> feito à mão com paixão!
                </p>
            </div>

            {/* Coluna 2 - Links rápidos */}
            <div className="text-center md:text-left">
                <h3 className="text-[var(--base-color)] font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-3">
                    <li>
                        <a 
                            href="#" 
                            className="
                            text-white
                            flex items-center justify-center md:justify-start gap-2
                            transition-all duration-300
                            active:scale-[1.02]
                            active:text-[var(--text-color)]
                            md:hover:scale-[1.02]
                            md:hover:text-[var(--text-color)]
                            "
                        >
                            <span className="
                            inline-block
                            active:animate-pulse
                            md:hover:animate-pulse
                            md:active:animate-none
                            ">
                            🏠
                            </span>
                            Home
                    </a>
                    </li>
                    <li>
                        <a 
                            href="#produtos" 
                            className="
                            text-white
                            flex items-center justify-center md:justify-start gap-2
                            transition-all duration-300
                            active:scale-[1.02]
                            active:text-[var(--text-color)]
                            md:hover:scale-[1.02]
                            md:hover:text-[var(--text-color)]
                            "
                        >
                            <span className="
                            inline-block
                            active:animate-pulse
                            md:hover:animate-pulse
                            md:active:animate-none
                            ">
                            🛒
                            </span>
                            Produtos
                    </a>
                    </li>
                    <li>
                        <a 
                            href="#sobrenos"
                            className="
                            text-white
                            flex items-center justify-center md:justify-start gap-2
                            transition-all duration-300
                            active:scale-[1.02]
                            active:text-[var(--text-color)]
                            md:hover:scale-[1.02]
                            md:hover:text-[var(--text-color)]
                            "
                        >
                            <span className="
                            inline-block
                            active:animate-pulse
                            md:hover:animate-pulse
                            md:active:animate-none
                            ">
                            ℹ️
                            </span>
                            Sobre nós
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contato" 
                            className="
                            text-white
                            flex items-center justify-center md:justify-start gap-2
                            transition-all duration-300
                            active:scale-[1.02]
                            active:text-[var(--text-color)]
                            md:hover:scale-[1.02]
                            md:hover:text-[var(--text-color)]
                            "
                        >
                            <span className="
                            inline-block
                            active:animate-pulse
                            md:hover:animate-pulse
                            md:active:animate-none
                            ">
                            👋
                            </span>
                            Contato
                        </a>
                    </li>
                </ul>
            </div>

            {/* Coluna 3 - Contatos */}
            <div className="text-center md:text-left">
                <h3 className="text-[var(--base-color)] font-bold mb-4">Contato</h3>
                <address className="not-italic space-y-3">
                {/* Item com transição */}
                    <div className="
                        transition-all 
                        duration-300
                        active:scale-[1.02] 
                        active:text-[var(--text-color)]
                        md:hover:scale-[1.02]
                        md:hover:text-[var(--text-color)]
                    ">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <a 
                                href="https://www.google.com/maps/place/São+Paulo,+SP" 
                                target="blank" 
                                rel="noopener noreferrer"
                            >
                                <span className="inline-block active:animate-pulse md:hover:animate-pulse md:active:animate-none">
                                    📍
                                </span>
                                São Paulo, SP
                            </a>
                        </p>
                    </div>

                    <div className="
                        transition-all 
                        duration-300
                        active:scale-[1.02] 
                        active:text-[var(--text-color)]
                        md:hover:scale-[1.02]
                        md:hover:text-[var(--text-color)]
                    ">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <span className="inline-block active:animate-pulse  md:hover:animate-pulse md:active:animate-none">
                                📱
                            </span>
                            <a 
                                href="https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, gostaria de saber mais sobre suas linguiças artesanais!"
                                target="blank" 
                            >
                                (11) 93498-1125
                            </a>
                        </p>
                    </div>

                    <div className="
                        transition-all 
                        duration-300
                        active:scale-[1.02] 
                        active:text-[var(--text-color)]
                        md:hover:scale-[1.02]
                        md:hover:text-[var(--text-color)]
                    ">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <span className="inline-block active:animate-pulse  md:hover:animate-pulse md:active:animate-none">
                                ✉️
                            </span>
                            <a 
                                href="mailto:dacasalinguicas@gmail.com "
                                target="blank" 
                            >
                                dacasalinguicas@gmail.com 
                            </a>
                        </p>
                    </div>
                </address>
            </div>
        </div>

            {/* Divisor */}
            <div className="border-t border-black/30 my-6"></div>

            {/* Rodapé inferior */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--base-color)]/80">
                <p>© 2025 Empresa. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer