import React from 'react'
import './services.css'
import { HiCheck } from 'react-icons/hi'
import  HCIA1  from '../../assets/pdf/HCIA Cloud Computing V4 - Nestor Duhamel Sanchez Perez.pdf'
import  HCIA2  from "../../assets/pdf/HCIA-Datacom 2022 Nestor Duhamel Sanchez Perez.pdf"

const Services = () => {
  return (
    <section id='services'>
      <h5>Algunos de mis estudios</h5>
      <h2>Constancias y certificaciones</h2>

      <div className="container services__container">
        {/* First service GOOGLE CLOUD*/}
        <article className='service'>
          <a href="https://www.cloudskillsboost.google/public_profiles/6a1b32b0-0c59-46a4-a13c-72034f262a8c"
          target='_blank' rel='noopener noreferrer'>
            <div className="service__head">
              <h3>Google Cloud</h3>
              <h5 align="center" className='badge_title'>Badges</h5>
            </div>
          </a>
          
          <ul className='service__list'>
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Essential Google Cloud Infrastructure: Core Services</p>
            </li>
            
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Getting Started with Google Kubernetes Engine</p>
            </li>
            
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Getting Started - Create and Manage Cloud Resource</p>
            </li>
            
            <li>
              <HiCheck className='service__list-icon'/>
              <p>Automating Infrastructure on Google Cloud with Terraform</p>
            </li>
          </ul>
        </article>

        {/* second service HUAWEI*/}
        <article className='service'>
          <div className="service__head">
            <h3>Huawei</h3>
          </div>
          <ul className='service__list'>
            {/* Primera certificación */}
            <a href={HCIA1} target='_blank'>
              <li>
                <HiCheck className='service__list-icon'/>
                <p>HCIA Cloud Computing V4.0 - Huawei iLearning</p>
              </li>
            </a>
            
            {/* Segunda certificación */}
            <a href={HCIA2} target='_blank'>
              <li>
                <HiCheck className='service__list-icon'/>
                <p>HCIA-Datacom 2022 - Huawei Enterprise</p>
              </li>
            </a>
          </ul>
        </article>

        {/* Third service HUAWEI
        <article className='service'>
          <div className="service__head">
            <h3>Cisco</h3>
          </div>
          <ul className='service__list'>
            
          </ul>
        </article>*/}
      </div>

    </section>
  )
}

export default Services