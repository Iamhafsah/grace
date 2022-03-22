import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import { StaticImage } from 'gatsby-plugin-image'


const SelectedWorks = () => {
  return (
    <section className={sectionStyle}>
        <h2 className={headingStyle}>Selected Work</h2>

        <section>
            <div className={workTextWrapStyle}>
                <div>
                    <h1 className={numberStyle}>01</h1>
                    <p className={workTitleStyle}>Sana Transfer</p>
                    <p className={workTitleStyle2}>Sana Transfer</p>
                </div>
                
                <div className={workDetailsStyle}>
                    <p className={imageTitleStyle}>web app, mobile app, & landing page website</p>
                
                    <StaticImage
                    src="../../../images/sana-header.png"
                    alt="sana header image"
                    width={450}
                    height={250}
                    className={workImageStyle}
                    />
                </div>
            </div>

            <div className={workTextWrapStyle}>
                <div>
                    <h1 className={numberStyle}>02</h1>
                    <p className={workTitleStyle}>Parcel Dash</p>
                    <p className={workTitleStyle2}>Parcel Dash</p>
                </div>
               
                <div className={workDetailsStyle}>
                    <p className={imageTitleStyle}>ui-ux case study</p>
                
                    <StaticImage
                    src="../../../images/parcel-dash-header.png"
                    alt="parcel-dash header image"
                    width={450}
                    height={250}
                    className={workImageStyle}
                    />
                </div>
            </div>

            <div className={`${workTextWrapStyle} border-none mb-[220px]`}>
                <div>
                    <h1 className={numberStyle}>03</h1>
                    <p className={workTitleStyle}>WPCare Lab</p>
                    <p className={workTitleStyle2}>WPCare Lab</p>
                </div>

                <div className={workDetailsStyle}>
                    <p className={imageTitleStyle}>landing page website & dashboard</p>
                
                    <StaticImage
                    src="../../../images/wp-care-header.png"
                    alt="wp-care header image"
                    width={450}
                    height={250}
                    className={workImageStyle}
                    />
                </div>
            </div>
        </section>
    </section>
  )
}

const sectionStyle = ctl(`
    xl:px-[100px]
    px-[80px]
    mt-[124px]
`)
const headingStyle = ctl(`
    text-[28px]
    mb-10
    font-[600]
    text-gm-black
`)
const workTextWrapStyle = ctl(`
    work-text-wrap
    text-gm-grey
    border-b-[1px]
    border-gm-border-grey
    pt-6
    cursor-pointer
    group
    relative
`)
const numberStyle = ctl(`
    text-[12px]
    mb-4
    font-[700]
`)
const workTitleStyle = ctl(`
    work-title
    xl:text-[56px]
    text-[40px]
    font-[600]
    pb-8
    group-hover:hidden
`)
const workTitleStyle2 = ctl(`
    work-title2
    xl:text-[56px]
    text-[40px]
    font-[600]
    pb-8
    hidden
    group-hover:block
    transition-all duration-[1.5s] ease
`)
const imageTitleStyle = ctl(`
    uppercase
    mb-4
    lg:text-[14px] text-[12px]
    font-[550]
`)
const workDetailsStyle = ctl(`
    absolute 
    z-10 
    right-0 top-5
    opacity-0
    group-hover:opacity-100
    transition duration-[1s] ease
`)
const workImageStyle = ctl(`
    w-[35vw] xl:w-auto
`)

export default SelectedWorks