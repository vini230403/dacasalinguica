import './NavBar.css'

import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <img src="/public/img/logo.svg" alt="logo" className='logo' />
        <h1 className='title'>Da Casa</h1>
        <nav className='navbar'>
            <ul className='nav-list'>
                <li>
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="navlink">Produto</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="navlink">Sobre Nós</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="navlink">Contato</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar