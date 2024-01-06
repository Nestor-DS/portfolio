import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/svgProyects/FindApp-img1.svg'
import IMG2 from '../../assets/svgProyects/link_bio.jpeg'
import IMG3 from '../../assets/svgProyects/portfolio.png'
import IMG4 from '../../assets/svgProyects/sentiments_analisys.png'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image:  IMG1,
    title:  'FindApp',
    github: 'https://github.com/Nestor-DS/FindApp',
  },
  {
    id: 2,
    image:  IMG2,
    title:  'LinkBio',
    github: 'https://github.com/Nestor-DS/link_bio'
  },
  {
    id: 3,  
    image:  IMG3,
    title:  'Portfolio', 
    github: 'https://github.com/Nestor-DS/portfolio'
  },
  {
    id: 4,
    image:  IMG4,
    title:  'Sentiments Analisys',
    github: 'https://github.com/Nestor-DS/Analisis-de-Sentimientos-en-criticas-de-peliculas'
  }
]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portafolio</h2>

      <Swiper className="container portfolio__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={2}
      pagination={{ clickable: true }} >
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <SwiperSlide className='portfolio__item'>
                <div className="portfolio__item-image" key={id}>
                  <img src={image} alt={`Project: ${title}`} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a id="btnGit" href={github} className='btn' target='_blank' align="center">GitHub</a>
                  {/*<a href={demo} className='btn btn-primary' target='_blank'>About</a>*/}
                </div> 
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio