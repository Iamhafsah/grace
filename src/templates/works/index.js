import React from "react"
import { graphql, Link } from "gatsby"
import ctl from '@netlify/classnames-template-literals'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import RighArrow from '../../images/icons/right-arrow.svg'


const Works = ({ data }) => {
  const {
    title,
    background,
    headerImage,
    role,
    coreObjectives
  } = data.contentfulWorks

  const projectRole = Object.values(role).map(item => (<p className={roleTextStyle}>{item}</p>))
  const objectives = coreObjectives && Object.values(coreObjectives).map(item => (<li className="list-disc mb-2 ml-5">{item}</li>))

  return (
    <Layout>
      <div>
        <Link className={linkWrapStyle} to="/my_work">

          <div className={linkWrapStyle}>
            <span className={brownBoxStyle}></span>
            <RighArrow className={rightArrowStyle}/>
          </div>
          <a href="/my_work" className={backStyle}>Back to Select Work</a>
          
        </Link> 
        <GatsbyImage
          image={headerImage.gatsbyImageData}
          className={headerImageStyle}
          alt="header image"
        />

        <section className={articleWrapStyle}>
          <article>
            <h1 className={headingStyle}>Background</h1>
            <div
              className="work-background"
              dangerouslySetInnerHTML={{ __html: background.background }}
            ></div>
          </article>

          <div>
            <h1 className={headingStyle}>My Role</h1>
            
            <div className="flex gap-5">{projectRole}</div>
          </div>
          
          {
            coreObjectives && (
              <div>
                <h1 className={headingStyle}>Core Objectives</h1>
                <ul>
                  {objectives}
                </ul>
              </div>
            )
          }
        </section>
      </div>
      </Layout>
  )
}

export default Works

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulWorks (slug: { eq: $slug }) {
      slug
      title
      headerImage {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED, quality: 100)
      }
      background {
        background
      }
      coreObjectives {
        _1
        _2
        _3
      }
      role {
        _1
        _2
      }
      imageAboveWayForward {
        gatsbyImageData(placeholder: BLURRED, quality: 100, formats: WEBP)
      }
      imageBelowWayForward {
        gatsbyImageData(placeholder: BLURRED, quality: 100, formats: WEBP)
      }
      onboardingFlowImages {
        gatsbyImageData(placeholder: BLURRED, quality: 100, formats: WEBP)
      }
      onboardingFlowText {
        onboardingFlowText
      }
      styleGuideImage {
        gatsbyImageData(placeholder: BLURRED, quality: 100, formats: WEBP)
      }
      userDashboardImages {
        gatsbyImageData(placeholder: BLURRED, quality: 100, formats: WEBP)
      }
      userDashboardText {
        userDashboardText
      }
      wayForward {
        wayForward
      }
    }
  }
  
`


const linkWrapStyle = ctl(`
  flex 
  items-center
  pl-8 group
  gap-3
`)
const brownBoxStyle = ctl(`
  bg-gm-brown 
  w-[13px] h-[13px] block
`)
const rightArrowStyle = ctl(`
  absolute 
  ml-[3px] 
  group-hover:-translate-x-2 
  transition-all duration-[250ms] 
  rotate-180
`)
const backStyle = ctl(`
  text-[18px] 
  underline 
  font-semibold 
`)
const articleWrapStyle = ctl(`
  xl:max-w-[712px]
  md:max-w-[80%] 
  max-w-[85%] 
  mx-auto
`)
const headerImageStyle = ctl(`
  mx-14 
  xl:h-[75vh] 
  xl:w-[92%]
  mt-[50px]
`)
const headingStyle = ctl(`
  mb-[22px] 
  text-[28px] 
  font-semibold 
  text-gm-black 
  mt-12
`)
const roleTextStyle = ctl(`
  bg-[#C9C9C4]
  p-[10px]
  rounded-[3.5px]
`)