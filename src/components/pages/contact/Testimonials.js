import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import TestimonialImages from '../../../images/icons/testimonials.svg'


const Testimonials = () => {
  return (
    <div className='xl:mb-20'>
        <TestimonialImages className={testimonialStyle}/>
    </div>
  )
}


const testimonialStyle = ctl(`
w-[65vw] lg:w-[70vw] -mt-40 xl:-mt-0 -ml-10
`)



export default Testimonials