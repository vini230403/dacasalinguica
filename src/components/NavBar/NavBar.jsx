import './NavBar.css'

import { useState } from 'react'

import { NavLink } from "react-router-dom"


const NavBar = () => {

    const [isModalMenu, setIsModalMenu] = useState(false)

    const toggleModal = () => {
        setIsModalMenu(!isModalMenu)
    }



  return (
    <header>
        <img src="/public/img/logo.svg" alt="logo" className='logo' />
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
                        <NavLink to="/" className="navlink" onClick={toggleModal}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/produtos" className="navlink" onClick={toggleModal}>Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobrenos" className="navlink" onClick={toggleModal}>Sobre Nós</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" className="navlink" onClick={toggleModal}>Contato</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar