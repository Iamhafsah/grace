const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //query to get portfolio works

  const {
    data: {
      allContentfulWorks: { nodes: allWorks },
  },
  } = await graphql(`
    query{
      allContentfulWorks {
        nodes {
          slug
        }
      }
    }
  `)

  const workPageTemplate = path.resolve(
    "./src/templates/works.js"
  )

  allWorks.forEach(work => {
    createPage({
      path: work.slug,
      component: workPageTemplate,
      context:{
          slug: work.slug
      }
    })
  })
}

