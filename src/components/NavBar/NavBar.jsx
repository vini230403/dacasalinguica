import './NavBar.css'

import { useState } from 'react'

import { NavLink } from "react-router-dom"


const NavBar = () => {

    const [isModalMenu, setIsModalMenu] = useState(false)
    const [activeLink, setActiveLink] = useState(null)

    const toggleModal = () => {
        setIsModalMenu(!isModalMenu)
    }

    const handleLinkClick = (link) => {
        setActiveLink(link)
        setIsModalMenu(false)
    }

  return (
    <header>
        <img src="/img/logo.svg" alt="logo" className='logo' />
        <h1 className='title'>Linguiças Artesanais</h1>
        <nav className='navbar'>
            <div class="menu-icon" id="menuIcon" onClick={toggleModal}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-list ${isModalMenu ? 'open' : ''}`} id="navList">
                <li>
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/produtos" className="navlink">Produtos</NavLink>
                </li>
                <li>
                    <NavLink to="/sobrenos" className="navlink">Sobre Nós</NavLink>
                </li>
                <li>
                    <NavLink to="/contato" className="navlink">Contato</NavLink>
                </li>
            </ul>
            <div className={`modal ${isModalMenu ? 'open' : ''}`} id='modalMenu'>
                <div className="menu-icon" id="modalMenuIcon" onClick={toggleModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className='nav-list'>
                    <li>
                        <NavLink 
                            to="/" 
                            className={`navlink ${activeLink === "/" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/produtos" 
                            className={`navlink ${activeLink === "/produtos" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/produtos")}
                        >
                            Produtos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/sobrenos" 
                            className={`navlink ${activeLink === "/sobrenos" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/sobrenos")}
                        >
                            Sobre Nós
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contato" 
                            className={`navlink ${activeLink === "/contato" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/contato")}
                        >
                            Contato
                        </NavLink>
                    </li>
                </ul>
                <footer className="modal-footer">
                    <p>O Sabor da Tradição Artesanal!</p>
                </footer>
            </div>
        </nav>
    </header>
  )
}

export default NavBar