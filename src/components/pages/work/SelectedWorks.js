import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'



const SelectedWorks = () => {

    const works = useStaticQuery(graphql`
        {
            allContentfulWorks(sort: {fields: createdAt}) {
                nodes {
                    title
                    slug
                    headerImage {
                    gatsbyImageData(formats: WEBP, placeholder: BLURRED, quality: 100)
                    }
                    workScope
                }
            }
        }
    `)

    const work =  works.allContentfulWorks.nodes
    
    const allWorks = work.map((item, index) => (
        <div className={workTextWrapStyle}>
        <Link  to={`/my_work/${item.slug}`} >
            <div>
                <h1 className={numberStyle}>0 {index + 1}</h1>
                <p className={workTitleStyle}>{item.title}</p>
                <p className={workTitleStyle2}>{item.title}</p>
            </div>
            
            <div className={workDetailsStyle}>
                <p className={imageTitleStyle}>{item.workScope}</p>
                <GatsbyImage 
                image={item.headerImage.gatsbyImageData}
                className={workImageStyle}
                alt={ `${item.title} header image`}
                />
            </div>
        </Link>
        </div>
    ))

    return (
        <section className={sectionStyle}>
            <h2 className={headingStyle}>Selected Work</h2>

            {allWorks}
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
    last:border-none
    last:mb-[220px]
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
    w-[35vw] lg:w-[30vw] 2xl:w-[25vw]
    h-[150px] md:h-[200px] xl:h-[250px]
`)

export default SelectedWorks