import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Works = ({ data }) => {
  const {
    title,
    background,
    headerImage
  } = data.works

  return (
      <div className="md:max-w-[70%] mx-auto pt-14 single-post">
        <GatsbyImage
          image={headerImage.gatsbyImageData}
        />

        <article className="md:max-w-[80%] max-w-[85%] mx-auto mt-12">
          {/* <span className="text-[18px]">{date}</span> */}
          <h2 className="mt-4 text-[#292A2C]">{title}</h2>
          {/* <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <p
            className="py-8 opacity-50"
          >
            Published by {author.node.name} in {category}{" "}
          </p> */}
        </article>
      </div>
  )
}

export default Works

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulWorks (slug: { eq: $slug }) {
      slug
      title
      headerImage {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED)
      }
    }
  }
  
`
