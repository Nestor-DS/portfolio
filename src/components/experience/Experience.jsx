import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Kotlin_project = "https://github.com/Nestor-DS/FindApp"
const Java_project = "https://github.com/Nestor-DS/Calculato"
const Python_project = "https://github.com/Nestor-DS/Analisis-de-Sentimientos-en-criticas-de-peliculas"
const Cpp_project = ""
const SQL_project = ""
const HTML_project = ""
const CSS_project = ""
const React_project = "https://github.com/Nestor-DS/portfolio"


const Experience = () => {
    return (
        <section id='experience'>
            <h5>¿Cuáles son mis habilidades?</h5>
            <h2><strong>Mi Stack Tecnológico</strong></h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Desarrollo FrontEnd</h3>
                    <div className="experience__content">
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div><h4>
                                    <a className='skill__title'
                                        href={HTML_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        HTML
                                    </a>
                                    </h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4><a className='skill__title'
                                        href={CSS_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        CSS
                                    </a></h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4 >
                                    <a className='skill__title'
                                    href={Kotlin_project}
                                    target='_blank' rel='noopener noreferrer'
                                    >
                                        Kotlin
                                    </a>
                                </h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4><a className='skill__title'
                                        href={React_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        React
                                    </a></h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>Desarrollo BackEnd</h3>
                    <div className="experience__content">
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4><a className='skill__title'
                                        href={Cpp_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        C++
                                    </a></h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4><a className='skill__title'
                                        href={SQL_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        SQL
                                    </a></h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4><a className='skill__title'
                                        href={Java_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        Java
                                    </a></h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4><a className='skill__title'
                                        href={Python_project}
                                        target='_blank' rel='noopener noreferrer'
                                    >
                                        Python
                                    </a></h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="used__tools">
                <h3>Herramientas</h3>
                    <div className="experience__content">
                        
                        <article className='experience__details visual__studio'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Visual Studio</h4>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>
                                        GitHub</h4>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>
                                        Figma</h4>

                            </div>
                        </article>                              
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Experience