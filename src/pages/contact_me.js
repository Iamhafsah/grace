import React from 'react'
import Layout from "../components/layout"
import ContactPage from '../components/pages/contact'
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="My Work" />
      <ContactPage/>
    </Layout>
  )
}

export default Contact