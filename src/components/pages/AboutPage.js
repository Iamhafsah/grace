import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import { StaticImage } from 'gatsby-plugin-image'
import Resume from '../../images/resume.pdf'
import { Link } from 'gatsby'
import RighArrow from '../../images/icons/right-arrow.svg'


const AboutPage = () => {
  return (
    <div className={pageWrapStyle}>
        {/* <div>
          <StaticImage
          src='../../images/headshot.png'
          height={295}
          width={252}
          alt="Grace-Mary's picture"
          className='mb-[30px]'
          quality={100}
          />

          <ul>
            <li>
              <Link to='/contact_me' className={linkStyle}>
                <span>Contact Me</span>

                <div className={linkWrapStyle}>
                  <span className={brownBoxStyle}></span>
                  <RighArrow className={rightArrowStyle}/>
                </div>
              </Link> 
            </li>
            <li>
              <a href={Resume} className={linkStyle}>
                <span>View my resume</span> 

                <div className={linkWrapStyle}>
                  <span className={brownBoxStyle}></span>
                  <RighArrow className={rightArrowStyle}/>
                </div>
              </a> 
            </li>
          </ul>
        </div>

        <article className={articleStyle}>
          <p>I am Grace Oisamoje, a self-awareness enthusiast and Product Designer based in Ontario, Canada.</p>

          <p>I have <b> 5+ years of relevant experience spanning user experience design and research</b>, working within organizations and freelance. I'm currently a user experience designer at <a href='https://www.anka.africa/'>Anka</a>. I have also worked at companies/institutions such as <a href='https://fourthcanvas.co'>FourthCanvas</a> and <a href='https://www.biu.edu.ng/'>Benson Idahosa University</a>. <b>My work experience cuts across industries -</b> Marketplace/e-commerce, retail, fintech and education.</p>

          <p>I have Bachelor's and Master's degrees in International Studies. My early career was in academics, but along the way, I discovered design. <b>My journey started with fashion design then I transitioned into UI-UX Design. </b></p>

          <p><b>My diverse experiences - in academics and as a founder - have enriched my practice as a user interface Designer.</b> Much of my work is dedicated to creating digital experiences that enrich, excite and are meaningful to humans and brands.</p>

          <p><b>I am passionate about sharing information,</b> and I'm building a Youtube community via <a href='https://www.youtube.com/channel/UCh1j1VokaKJ01AobJ7YbJNg'>The Nook,</a> where I help people realize their creative potentials. <b>I also give back by volunteering</b> at <a href='https://steeringforgreatness.org/'>Steering for Greatness</a> and through social impact initiatives at <a href='https://gallery.mailchimp.com/a4f41985066e73f1b4dce89d4/files/90594cf6-ea36-46b8-a3b3-03520898b633/The_Joy_of_Christmas_Lola_.pdf?mc_cid=527c641d68&mc_eid=cbcfe10f92'>Boriah.</a></p>

          <p>I love travelling, trying out new cuisines, and having deep conversations in my free time.</p>
        </article> */}
    </div>
  )
}

const pageWrapStyle = ctl(`
  about-page
  flex justify-center
  px-[80px]
  xl:gap-[116px]
  gap-[58px]
  pt-[124px]
`)
const articleStyle = ctl(`
  about-article
  2xl:max-w-[712px]
  xl:max-w-[600px]
  max-w-[500px]
`)
const linkStyle = ctl(`
  mb-4
  font-[600]
  text-[18px]
  flex items-center
  gap-2
  group
`)
const linkWrapStyle = ctl(`
  flex 
  items-center
`)
const brownBoxStyle = ctl(`
  bg-gm-brown 
  w-[13px] h-[13px] block
`)
const rightArrowStyle = ctl(`
  absolute 
  ml-[-3px] 
  group-hover:translate-x-2 
  transition-all duration-[250ms] 
`)

export default AboutPage








