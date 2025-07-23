import React from 'react'
import './navbar.css'


const navbar = () => {
  return (
    <nav>
        <div className="logo"> NİBa Visa</div>
        <ul className="nav-links">
            <li><a href="/">Hizmetlerimiz</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/contact">İletişim</a></li>
        </ul>
        

    </nav>
  )
}

export default navbar