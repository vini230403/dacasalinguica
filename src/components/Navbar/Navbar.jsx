import './Navbar.css';
import "../../App.css"

import { IoIosMenu, IoIosClose } from "react-icons/io";

import { useState } from 'react';

const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

  return (
    <>
        <nav className="flex justify-between items-center bg-[var(--base-color)] p-3 pr-5 pl-5 md:pr-20 md:pl-20 lg:pr-40 lg:pl-40 fixed top-0 left-0 w-full z-10" id="navbar">
            <a href="#">
                <img src="/logo.svg" alt="Logo da empresa" title="Logo da empresa" className="logo w-20 lg:w-24 h-auto"  />
            </a>

            <h1 className='title text-2xl lg:text-4xl  text-center font-bold pr-8 pl-8 lg:pr-0 lg:pl-0'>Linguiças Artesanais</h1>

            <button onClick={toggleMenu} className='lg:hidden text-white focus:outline-none' aria-label="Menu">
                <IoIosMenu size={48} className="icone-menu" />
            </button>

            <ul className="hidden lg:flex gap-12">
                <li>
                    <a href="#" 
                    className="subtitle
                        text-[var(--text-color)]
                        text-2xl
                        font-bold
                        relative 
                        transition-colors 
                        duration-200                         
                        group  
                    "
                    >
                    Home
                    <span className="
                        absolute 
                        left-0 
                        bottom-[-0.5rem] 
                        w-0 
                        h-0.5 
                        bg-[var(--text-color)]
                        transition-all 
                        duration-300
                        group-hover:w-full
                    "></span>
                    </a>
                </li>
                <li>
                    <a href="#produtos"  
                    className="subtitle
                        text-[var(--text-color)]
                        text-2xl
                        font-bold
                        relative 
                        transition-colors 
                        duration-200                         
                        group  
                    "
                    >
                    Produtos
                    <span className="
                        absolute 
                        left-0 
                        bottom-[-0.5rem] 
                        w-0 
                        h-0.5
                        bg-[var(--text-color)]
                        transition-all 
                        duration-300
                        group-hover:w-full
                    "></span>
                    </a>
                </li>
                <li>
                    <a href="#sobrenos"  
                    className="subtitle
                        text-[var(--text-color)]
                        text-2xl
                        font-bold 
                        relative 
                        transition-colors 
                        duration-200                        
                        group
                    "
                    >
                    Sobre nós
                    <span className="
                        absolute 
                        left-0 
                        bottom-[-0.5rem] 
                        w-0 
                        h-0.5 
                        bg-[var(--text-color)]
                        transition-all 
                        duration-300
                        group-hover:w-full
                    "></span>
                    </a>
                </li>
                <li>
                    <a href="#contato"
                    className="subtitle
                        text-[var(--text-color)]
                        text-2xl
                        font-bold 
                        relative 
                        transition-colors 
                        duration-200                        
                        group
                    "
                    >
                    Contato
                    <span className="
                        absolute 
                        left-0 
                        bottom-[-0.5rem] 
                        w-0 
                        h-0.5 
                        bg-[var(--text-color)]
                        transition-all 
                        duration-300
                        group-hover:w-full
                    "></span>
                    </a>
                </li>
            </ul>
        </nav>
        {/* Modal com classes condicionais para transição */}
        <div className={`fullscreen-modal ${isOpenMenu ? "open" : ""}`}>
            <div className="modal-content">
                <button onClick={toggleMenu} className="close-button">
                    <IoIosClose size={56} className='icone-close' />
                </button>
                <ul className="menu-items">
                    <li><a href="#" onClick={toggleMenu} className='text-[var(--text-color)] subtitle text-3xl font-bold'>Home</a></li>
                    <li><a href="#produtos" onClick={toggleMenu}className='text-[var(--text-color)] subtitle text-3xl font-bold'>Produtos</a></li>
                    <li><a href="#sobrenos"  onClick={toggleMenu}className='text-[var(--text-color)] subtitle text-3xl font-bold'>Sobre nós</a></li>
                    <li><a href="#contato"  onClick={toggleMenu}className='text-[var(--text-color)] subtitle text-3xl font-bold'>Contato</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar