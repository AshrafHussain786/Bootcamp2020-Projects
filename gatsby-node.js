const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
  query MyQuery{
    getLollies{
    getAllLollies{
        recipientName
        senderName
        message
        flavourTop
        flavourMiddle
        flavourBottom
        lollyPath
  }}}
  `)

  console.log("Data from gatsby-node file ===> ", result.data)
  result.data.getLollies.getAllLollies.map( async (lollyPath ) => {    
    await actions.createPage({
      path: `lollies/${lollyPath}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        lollies: lollyPath,
      },
    })
  })
}