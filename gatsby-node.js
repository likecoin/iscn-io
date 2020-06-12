/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Create specs pages
  const specsTemplate = require.resolve(`./src/templates/specs.js`)
  const specsMdResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
          }
        }
      }
    }
  `)
  // Handle errors
  if (specsMdResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on specs.`)
    return
  }
  specsMdResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let [,path,version] = node.fileAbsolutePath.match(/specs\/(.+?)\/?(v\d+)?.md$/)
    if (/README/.test(path)) {
      // Is index page
      path = '/'
    } else {
      path = `${path}-${version}`
    }
    const context = {
      // additional data can be passed via context
      id: node.id,
      pagePath: path,
    }
    createPage({
      path,
      component: specsTemplate,
      context,
    })
  })
}