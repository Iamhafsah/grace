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
    headerImage
  } = data.contentfulWorks

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
          
        />

        <article className={articleStyle}>
          <h1 className={articleHeadingStyle}>Background</h1>
          <div
            className="work-background"
            dangerouslySetInnerHTML={{ __html: background.background }}
          ></div>
        </article>
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
const articleStyle = ctl(`
  md:max-w-[80%] 
  max-w-[85%] 
  mx-auto mt-12
  xl:max-w-[712px]
`)
const headerImageStyle = ctl(`
  flex 
  justify-center 
  mx-14 
  h-[75vh] 
  mt-[50px]
`)
const articleHeadingStyle = ctl(`
  mb-[22px] 
  text-[28px] 
  font-semibold 
  text-gm-black 
`)