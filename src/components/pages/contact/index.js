import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import Line from '../../../images/icons/line.svg'
import Behance from '../../../images/icons/social/behance.svg'
import LinkedIn from '../../../images/icons/social/linkedin.svg'
import Twitter from '../../../images/icons/social/twitter.svg'
import Testimonials from './Testimonials'



const ContactPage = () => {
  return (
      <div className={pageWrapStyle}>
          <div className={topPartWrapperStyle}>
            <h1 className={boldTextStyle}>Get in touch – Let&apos;s discuss opportunities</h1>

            <p className={contactItemStyle}>
                <span className={contactEmojiStyle}>📞</span> 
                <Line/> 
                <a href='tel:(587) 966-6007'>(587) 966-6007</a>
            </p>

            <p className={contactItemStyle}>
                <span className={contactEmojiStyle}>✉️</span>
                 <Line /> 
                 <a href='mailto:graceoisamoje@gmail.com'>graceoisamoje@gmail.com
                 </a> 
            </p>

            <p className={contactItemStyle}>
                <span className={contactEmojiStyle}>🌐</span> 
                <Line/> 
                <span className={contactItemStyle}><LinkedIn/><Behance/><Twitter/></span> 
            </p>
          </div>

          <Testimonials/>
      </div>
  )
}

const pageWrapStyle = ctl(`
    px-[80px]
`)
const topPartWrapperStyle = ctl(`
    mb-[100px]
`)
const boldTextStyle = ctl(`
    xl:text-[56px]
    text-[40px]
    font-[700]
    lg:w-[619px]
    mb-6 mt-[150px]
    leading-snug
`)
const contactItemStyle = ctl(`
    flex items-center
    gap-8
    text-[17px]
`)
const contactEmojiStyle = ctl(`
    text-[27px]
`)

export default ContactPage