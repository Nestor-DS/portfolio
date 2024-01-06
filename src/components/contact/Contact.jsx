import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { PiMessengerLogoBold } from 'react-icons/pi'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from '@emailjs/browser';

const serviceID = 'service_oqdr3bo';
const templateID = 'template_y1rd81l';
const userID = '_VUY4xLOVbMm7IUzw';

const mailto = 'mailto:nestorduhamel18@outlook.es'
const messenger = 'https://m.me/profile.php?id=100080481984475'
const whatsapp = 'https://wa.me/527721029168'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      {/* Contact section title */}
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email option */}
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href={mailto} target='_blank' rel='noopener noreferrer'>Contactar</a>
          </article>

          {/* Messenger option */}
          <article className='contact__option'>
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href={messenger} target='_blank' rel='noopener noreferrer'>Contactar</a>
          </article>

          {/* WhatsApp option */}
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">Contactar</a>
          </article>
        </div>
        {/* Contact form */}
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