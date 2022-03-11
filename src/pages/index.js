import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/pages/Home"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="product designer in Ontario Canada" />
    
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}

    <Home/>
  </Layout>
)

export default IndexPage
