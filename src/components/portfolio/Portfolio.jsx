import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image:  IMG1,
    title:  'FindApp',
    github: 'https://github.com/Nestor-DS/FindApp',
    demo: ''
  },

  {
    id: 2,
    image:  IMG1,
    title:  'FindApp',
    github: 'https://github.com/Nestor-DS/FindApp',
    demo: '#about'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">

      {/*--------- Projects --------------- */}
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' align="center">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>About</a>
              </div> 
            </article>
            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolio