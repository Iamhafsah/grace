import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import Derin from '../../../images/icons/social/derin.svg'
import Lydia from '../../../images/icons/social/lydia.svg'
import Ephraim from '../../../images/icons/social/ephraim.svg'
import Avatar from '../../../images/icons/avatar.svg'


const Testimonials = () => {
  return (
    <div className='mb-[150px]'>
        <div className={firstTestimonialWrap}>
            <div className={firstTestimonialInnerWrap}>
                <Derin className={firstTestimonialImageStyle}/>
                <div className={firstTestimonialStyle}>
                    <div className={rightTestionialTextWrap}>
                        <a href='#' className={testimonialNameStyle}>Aderinsola Oluwafemi </a>
                        <p className={testimonialTitleStyle}>Product Designer, Eden Life</p>
                    </div>
                    <Avatar className={avatarStyle}/>
                </div>
            </div>
        </div>
        
        <div className={secondTestimonialWrap}>
            <div className={secondTestimonialInnerWrap}>
                <Lydia className={secondTestimonialImageStyle}/>
                <div className={secondTestimonialStyle}>
                    <Avatar className={avatarStyle}/>
                    <div>
                        <a href='#' className={testimonialNameStyle}>Lydia Fross</a>
                        <p className={testimonialTitleStyle}>Product Manager, Merideth </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={thirdTestimonialWrap}>
            <div className={thirdTestimonialInnerWrap}>
                <Ephraim className={thirdTestimonialImageStyle}/>
                <div className={thirdTestimonialStyle}>
                    <div className={rightTestionialTextWrap}>
                        <a href='#' className={testimonialNameStyle}>Chiuzor ephraim okeke</a>
                        <p className={testimonialTitleStyle}>Product Designer, Grupa</p>
                    </div>
                    <Avatar className={avatarStyle}/>
                </div>
            </div>
        </div>
    </div>
  )
}

const firstTestimonialWrap = ctl(`
flex justify-end
`)
const firstTestimonialInnerWrap = ctl(`
relative 2xl:pr-20
`)
const firstTestimonialImageStyle = ctl(`
w-[60vw] lg:w-[55vw] 2xl:w-auto
`)
const firstTestimonialStyle = ctl(`
absolute 
2xl:right-40 xl:right-20 right-10 
2xl:bottom-0  xl:bottom-1 bottom-12 
flex items-center gap-4
`)
const rightTestionialTextWrap = ctl(`
text-right
`)
const avatarStyle = ctl(`
w-16 xl:w-auto
`)
const testimonialNameStyle = ctl(`
text-[12px] uppercase font-[700]
`)
const testimonialTitleStyle = ctl(`
xl:text-[17px] text-[14px]
`)

const secondTestimonialWrap = ctl(`
flex justify-start
2xl:-mt-12 xl:-mt-24 -mt-40
`)
const secondTestimonialInnerWrap = ctl(`
relative 2xl:pl-32 xl:pl-32
`)
const secondTestimonialStyle = ctl(`
absolute 
bottom-44
left-10 xl:left-48 2xl:left-52
flex items-center gap-4
`)
const secondTestimonialImageStyle = ctl(`
w-[40vw] lg:w-[35vw] 2xl:w-auto
`)

const thirdTestimonialWrap = ctl(`
flex justify-end
2xl:-mt-48 -mt-40
mb-[75px]
`)
const thirdTestimonialInnerWrap = ctl(`
relative 2xl:pr-14 
`)
const thirdTestimonialStyle = ctl(`
 flex items-center gap-4
 absolute
 2xl:right-36 xl:right-16 right-14
 top-60 xl:top-auto
`)
const thirdTestimonialImageStyle = ctl(`
w-[40vw] lg:w-[35vw] 2xl:w-auto
`)



export default Testimonials