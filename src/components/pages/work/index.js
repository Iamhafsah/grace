import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import Scroll from '../../../images/icons/scroll-down.svg'
import Arrow from '../../../images/icons/arrow-down.svg'
import SelectedWorks from './SelectedWorks'


const Works = () => {
  return (
    <div>
        <h1 className={headingStyle}><span className={lightHeadingStyle}>Good design presents complex solutions, </span><span className={darkHeadingStyle}>simply.</span></h1>

        <div className={scrollIconWrapStyle}>
            <Scroll className={`${scrollIcon} scroll-rotate`} />
            <div className={`${scrollIcon} ${scrollArrowWrapStyle} `}><Arrow /></div>
        </div>
            
        <SelectedWorks/>
    </div>
  )
}

const headingStyle = ctl(`
    xl:text-[72px]
    md:text-[56px]
    sm:text-[40px]
    xl:w-[751px]
    md:w-[590px]
    sm:w-[450px]
    mx-auto
    font-[600]
    leading-snug
    text-center
    2xl:mt-[186px]
    lg:mt-40
    mt-20
    xl:mb-[164px]
    mb-20
`)
const lightHeadingStyle = ctl(`
    opacity-[.6]
`)
const darkHeadingStyle = ctl(`
    !opacity-[1]
`)
const scrollIconWrapStyle = ctl(`
   2xl:ml-[380px]
   xl:ml-[270px]
   lg:ml-56
   relative
   flex
   justify-center lg:justify-start
`)
const scrollIcon = ctl(`
    h-[140px]
    w-[140px]
    
`)
const scrollArrowWrapStyle = ctl(`
    flex 
    items-center justify-center
    absolute top-0
`)
export default Works