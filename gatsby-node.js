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

  console.log(data)
  result.data.getLollies.getAllLollies.map( async (indLolly ) => {    
    await actions.createPage({
      path: `lollies/${indLolly.lollyPath}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        lollies: lollyPath,
      },
    })
  })
}