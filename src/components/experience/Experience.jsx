import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>¿Cuáles son mis habilidades?</h5>
            <h2>Mi Stack Tecnológico</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Desarrollo FrontEnd</h3>
                    <div className="experience__content">
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div><h4>HTML</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>DJango</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Kotlin</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
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
                                <h4>C++</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Experience