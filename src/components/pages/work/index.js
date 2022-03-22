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
   
`)
const lightHeadingStyle = ctl(`
`)
const darkHeadingStyle = ctl(`
`)
const scrollIconWrapStyle = ctl(`
   
`)
const scrollIcon = ctl(`
   
    
`)
const scrollArrowWrapStyle = ctl(`
   
`)
export default Works