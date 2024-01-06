import React from 'react'
import CV from '../../assets/pdf/cv.pdf'

const cv = 'https://cvapp.mx/r/bwU9mYofX'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={cv} /*download*/ className='btn' target= '_blank' rel='noopener noreferrer'>Ver CV</a>
            <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
    )
}

export default CTA