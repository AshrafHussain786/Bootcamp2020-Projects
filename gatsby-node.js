const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query MyQuery {
      Lollies {
        getAllLollies {
          recipientName
          senderName
          message
          flavourTop
          flavourMiddle
          flavourBottom
          lollyPath
        }
      }
    }
  `)

  console.log("Data from gatsby-node file ===> ", result.data)

  // data.Lollies.getAllLollies.forEach((node) => {
  //   actions.createPage({
  //   path: `lollies/${node.lollyPath}`,
  // context: node
    result.data.Lollies.getAllLollies.map(async (indLolly) => {
        console.log(indLolly)
    await actions.createPage({
      path: `lollies/${indLolly.lollyPath}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        lollies: indLolly,
      },
    })
  })
}
