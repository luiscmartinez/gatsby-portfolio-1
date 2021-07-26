const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WebsiteJson implements Node {
      siteLink: String
      title: String
      codeLink: String
      body: String
      image: File
    }
  `
  createTypes(typeDefs)
}