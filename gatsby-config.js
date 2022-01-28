const author = 'Luis Martinez'
const github = 'luiscmartinez'
const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://luismartinez.dev`

module.exports = {
  siteMetadata: {
    title: `${author} Web Developer | Portfolio`,
    description: `${author} Web Development Portfolio. Showcasing freelance and side project work. Tech stack includes vanilla JS, React, and Node.js`,
    author,
    github,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'website',
        path: `${__dirname}/src/data/website.json`,
      },
    },

    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carouselImages`,
        path: `${__dirname}/src/images/carousel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sitePreviewImages`,
        path: `${__dirname}/src/images/site-preview`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutMeImages`,
        path: `${__dirname}/src/images/about-me`,
      },
    }
  ],
}
