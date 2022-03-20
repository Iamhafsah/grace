import * as React from "react"

import Layout from "../components/layout"
import Works from "../components/pages/work"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="My Work" />
    <Works/>
  </Layout>
)

export default SecondPage
