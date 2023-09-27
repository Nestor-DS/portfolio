import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Nestor</h1>
        <h5 className='text-light'>Desarrollador apacionado</h5>
        <CTA/>
        <HeaderSocial/>
        {/* ---------- Image Me --------------
        <div className='me'>
          <img src={ME} alt="Me" />
        </div>*/}
        <a href="#about" className='scroll__down'>Desplazarce</a>
      </div>
    </header>
  )
}

export default Header