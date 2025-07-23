import React from 'react'
import './contact.css'
import  whatsapp_logo  from '../../assets/whatsapp-logo.png'

const Contact = () => {
  return (
    <div className='contact-container'>
        <img src={whatsapp_logo} alt="" />
        <p>Whatsapp</p>
    </div>
  )
}

export default Contact