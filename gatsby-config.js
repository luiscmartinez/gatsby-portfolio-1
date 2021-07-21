const author = 'Luis Martinez'
const github = 'luiscmartinez'
const siteUrl = process.env.URL || process.env.DEPLOY_URL || `https://luismartinez.dev`

module.exports = {
  siteMetadata: {
    title: `${author} Web Developer | Portfolio`,
    description: `${author} Web Development Portfolio. Showcasing freelance and side project work. Tech stack includes vanilla JS, React, and Node.js`,
    author,
    github,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    'gatsby-plugin-root-import',
  ],
}
