const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/templates/blog-post.js`),
              context: {
                  slug: node.frontmatter.path,
              },
          })
      })
      resolve();
    });
  });
};