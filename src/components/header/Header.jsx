import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nestor</h1>
        <h5 className='text-light'>Junior Developer</h5>
        <CTA/>
        <HeaderSocial/>
        {/* ---------- Image Me --------------
        <div className='me'>
          <img src={ME} alt="Me" />
        </div>*/}
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header