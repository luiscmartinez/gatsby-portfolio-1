import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/Landing'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import MyWork from '../components/MyWork'
import About from '../components/About'
import GitHub from '../components/GitHub'
import metadataLanding from '../images/metadata-landing.jpg'
import gatsbyConfig from '../../gatsby-config'

const IndexPage = () => (
  <Layout>
    <SEO title={gatsbyConfig.siteMetadata.title} img={metadataLanding} />
    <Landing />
    <Testimonials />
    <MyWork />
    <Skills />
    <About />
    <GitHub />
  </Layout>
)

export default IndexPage
