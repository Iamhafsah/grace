import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import Linkedin from '../images/icons/social/linkedin.svg'
import Behance from '../images/icons/social/behance.svg'
import Twitter from '../images/icons/social/twitter.svg'
import Resume from '../images/resume.pdf'



const Footer = () => (
    <div className={pageWrapStyle}>
        <footer className={footerStyle}>
            <ul className={ulStyle}>
                <li><Linkedin/></li>
                <li><Behance/></li>
                <li><Twitter/></li>
            </ul>

            <ul className={ulStyle}>
                <li><a href={Resume}>View my resume</a> </li>
                <li>|</li>
                <li><a href='mailto:graceoisamoje@gmail.com'>Send an email</a></li>
            </ul>
        </footer>
    </div>
)
const pageWrapStyle = ctl(`
    px-[100px]
    border-t-[1px]
    border-gm-border-grey
`)
const footerStyle = ctl(`
    flex
    items-center
    justify-between
    px-[70px]
    py-10
    border-x-[1px]
    border-gm-border-grey
`)

const ulStyle = ctl(`
    flex
    items-center
    footer-ul
    gap-6
    uppercase
    text-[12px]
    font-bold
    tracking-[0.12em]
`)

export default Footer