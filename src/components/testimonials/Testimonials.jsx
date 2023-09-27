import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        avatar: AVTR1,
        name: 'Ernest',
        review: 'This is a review'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container' 
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }} >
                {
                    data.map (({avatar, name, review})=>{
                        return (
                            <SwiperSlide className='testimonials'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'> {name} </h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

{
                    data.map (({avatar, name, review})=>{
                        return (
                            <SwiperSlide className='testimonials'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'> {name} </h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
        
    )
}

export default Testimonials