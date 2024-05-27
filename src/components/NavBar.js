import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item"><a href="/">home</a></li>
            <li className="nav-item"><a href="/portfolio">portfolio</a></li>
            <li className="nav-item"><a href="/education">education</a></li>
            <li className="nav-item"><a href="/experience">experience</a></li>
            <li className="nav-item"><a href="/contact">contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar