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
   
`)
const headingStyle = ctl(`
   
`)
const workTextWrapStyle = ctl(`
  
`)
const numberStyle = ctl(`
    
`)
const workTitleStyle = ctl(`
   
`)
const workTitleStyle2 = ctl(`
  
`)
const imageTitleStyle = ctl(`
   
`)
const workDetailsStyle = ctl(`
   
`)
const workImageStyle = ctl(`
`)

export default SelectedWorks