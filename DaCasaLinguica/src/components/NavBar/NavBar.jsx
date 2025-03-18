import './NavBar.css'

import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <img src="" alt="logo" />
        <h1 className='title'>Da Casa</h1>
        <nav className='navabar'>
            <ul className='nav-list'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar