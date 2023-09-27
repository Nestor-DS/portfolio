import React, { useState, useEffect } from 'react';
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi';
import { PiUserListBold } from 'react-icons/pi';
import { RiServiceLine } from 'react-icons/ri';
import { BiBookBookmark } from 'react-icons/bi';
import { PiChatTeardropTextBold } from 'react-icons/pi';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('');

  // Función para manejar el scroll
  const handleScroll = () => {
    // Obtiene la posición actual del scroll
    const scrollPosition = window.scrollY;
  
    // Define las posiciones de las secciones en tu página
    const aboutPosition = document.getElementById('about').offsetTop;
    const experiencePosition = document.getElementById('experience').offsetTop;
    const servicesPosition = document.getElementById('services').offsetTop;
    const contactPosition = document.getElementById('contact').offsetTop;
  
    // Define un margen para mejorar la precisión en la detección
    const margin = 100;
  
    // Compara la posición actual del scroll con las posiciones de las secciones y actualiza el estado activo
    if (
      scrollPosition >= aboutPosition - margin &&
      scrollPosition < experiencePosition - margin
    ) {
      setActiveNav('about');
    } else if (
      scrollPosition >= experiencePosition - margin &&
      scrollPosition < servicesPosition - margin
    ) {
      setActiveNav('experience');
    } else if (
      scrollPosition >= servicesPosition - margin &&
      scrollPosition < contactPosition - margin
    ) {
      setActiveNav('services');
    } else if (scrollPosition >= contactPosition - margin) {
      setActiveNav('contact');
    } else {
      setActiveNav('home');
    }
  };
  
  
  // Agrega un evento de scroll para manejar el estado activo
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
        <a href="#"
            className={activeNav === 'home' ? 'active' : ''}><HiOutlineHome /></a>
        <a href="#about"
            className={activeNav === 'about' ? 'active' : ''}><PiUserListBold /></a>
        <a href="#experience"
            className={activeNav === 'experience' ? 'active' : ''}><BiBookBookmark /></a>
        <a href="#services"
            className={activeNav === 'services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact"
            className={activeNav === 'contact' ? 'active' : ''}><PiChatTeardropTextBold /></a>
        </nav>
    );
}

export default Nav;
