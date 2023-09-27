import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { PiMessengerLogoBold } from 'react-icons/pi'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oqdr3bo', 'template_y1rd81l', form.current, '_VUY4xLOVbMm7IUzw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/*----------- Email -----------*/}
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:nestorduhamel18@outlook.es" target='_blank' rel='noopener noreferrer'>Contactar</a>
          </article>

          {/*----------- Facebook -----------*/}
          <article className='contact__option'>
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/profile.php?id=100080481984475" target='_blank' rel='noopener noreferrer'>Contactar</a>
          </article>

          {/*----------- WhatsApp -----------*/}
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/7721029168" target="_blank" rel="noopener noreferrer">Contactar</a>
          </article>
        </div>
        {/*---- Form ---- */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre completo' required/>
          <input type="text" name='email' placeholder='Mail' required/>
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact