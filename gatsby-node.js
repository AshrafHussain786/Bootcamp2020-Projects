const path = require(`path`)

//////// FIRST METHOD
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

//////// SECOND METHOD
// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//   query MyQuery {
//     Lollies {
//       getAllLollies {
//       lollyPath
//       }
//     }
//   }
//   `)

//   console.log("Data from gatsby-node file ===> ", data)

//   data.Lollies.getAllLollies.forEach(({ lollyPath }) => {
//     actions.createPage({
//       path: `lollies/${lollyPath}`,
//       component: path.resolve(`./src/component/lollyPage.jsx`),
//       context: {
//         lollyPath: lollyPath,
//       },
//     })
//   })

}
