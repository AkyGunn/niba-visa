import React from 'react'
import './navbar.css'


const navbar = () => {

  const logoRef = React.createRef();
  const logotext = 'NİBa Visa';
  const colorPaltette = [
     '#be746e',
     '#e1ca73',
     '#72d0b5',
     '#53d5fb',
  ]

  return (
    <nav>
      <div ref={logoRef} className="logo">
        {" "}
        {logotext.split("").map((char, index) => (
          <span
            key={index}
            style={{ color: colorPaltette[index % colorPaltette.length] }}
          >
            {char}
          </span>
        ))}
      </div>
        <ul className="nav-links">
            <li><a href="/">Hizmetlerimiz</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/contact">İletişim</a></li>
        </ul>
        

    </nav>
  )
}

export default navbar