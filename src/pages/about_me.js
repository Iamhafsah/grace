import React from 'react'
import Layout from "../components/layout"
import AboutPage from '../components/pages/AboutPage'
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
     <Seo title="My Work" />
      <AboutPage/>
    </Layout>
  )
}

export default About