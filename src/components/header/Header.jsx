import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME5.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2 className='h1__header'>Gianfranco Navas Fernandini</h2>
        <h5 className='text-light'>Jr Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <div  className="me">
          <img className='img__header' src={ME} alt="" />
        </div>  

        
      </div>
    </header>
  )
}

export default Header