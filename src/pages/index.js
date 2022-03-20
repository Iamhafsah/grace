import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/pages/Home"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="product designer in Ontario Canada" />
    <Home/>
  </Layout>
)

export default IndexPage
