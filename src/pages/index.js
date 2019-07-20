import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Landing from '../components/Landing'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import MyWork from '../components/MyWork'
import About from '../components/About'
import GitHub from '../components/GitHub'
import metadataLanding from '../images/metadata-landing.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Riley Brown Web Developer | Portfolio" img={metadataLanding} />
    <Landing />
    <Skills />
    <Testimonials />
    <MyWork />
    <About />
    <GitHub />
  </Layout>
)

export default IndexPage
