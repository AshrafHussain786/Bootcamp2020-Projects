const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
  query MyQuery{
    LOLLIES{
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
//   result.Lollies.data.getAllLollies.map( async (lollyPath ) => {    
//     await actions.createPage({
    data.LOLLIES.getAllLollies.forEach((node) => {
      actions.createPage({
      path: `lollies/${node.lollyPath}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
    //   context: {
    //     lollies: lollyPath,
    //   },
      context: node
    })
  })
}