import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Landing from '../components/Landing'
import Skills from '../components/Skills'

const IndexPage = () => (
  <Layout>
    <Landing />
    <Skills />
  </Layout>
)

export default IndexPage
