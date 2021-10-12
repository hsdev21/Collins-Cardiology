/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require("dotenv").config()

exports.createPages = async function ({ actions, graphql }) {
  const pluginOptions = {
    wordPressUrl: `${process.env.BACKEND_URL}/`,
    uploadsUrl: process.env.UPLOADS_URL,
  }
  const {
    data: {
      wpcontent: {
        pages: { pageNodes },
      },
    },
  } = await graphql(
    `
      query {
        wpcontent {
          pages(first: 20) {
            pageNodes: nodes {
              id
              uri
              template {
                __typename
              }
            }
          }
        }
      }
    `
  )
  pageNodes.forEach(node => {
    const uri = node.uri
    if (uri === "/") return
    switch (node.template.__typename) {
      case "WPGraphQL_CustomTemplateTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pages`),
          context: { ...node, pluginOptions },
        })
        break
      case "WPGraphQL_NoSidebarTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pagesNoSideBar`),
          context: { ...node, pluginOptions },
        })
        break
      default:
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pages`),
          context: { ...node, pluginOptions },
        })
    }
  })
}
