import React from 'react'
import './nav.css'
import { HiOutlineHome } from 'react-icons/hi'
import { PiUserListBold } from 'react-icons/pi'
import { RiServiceLine } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'
import { PiChatTeardropTextBold } from 'react-icons/pi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} 
                className={activeNav === '#' ? 'active' : ''}><HiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} 
                className={activeNav === '#about' ? 'active' : ''}><PiUserListBold/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
            <a href="#services" onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}><PiChatTeardropTextBold/></a>
        </nav>
    )
}

export default Nav