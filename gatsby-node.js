const path = require('path')
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
//////// FIRST METHOD
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
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

  // console.log("Result in gatsby-node file >>>>>", result)

  result.data.Lollies.getAllLollies.map(async (indLolly) => {
    // console.log(indLolly)
    await createPage({
      path: `lolly/${indLolly.lollyPath}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        lollies: indLolly,
      },
    })
  })


// // exports.createPages = async ({ actions, graphql }) => {
// //   const { data } = await graphql(`
// //     query MyQuery {
// //       Lollies {
// //         getAllLollies {
// //           lollyPath
// //         }
// //       }
// //     }
// //   `)


// //   const result = await graphql(`
// //   query MyQuery($lollyPath: String!) {
// //   Lollies {
// //     GetLollyByPath(lollyPath: $lollyPath) {
// //       flavourBottom
// //       flavourMiddle
// //       flavourTop
// //       lollyPath
// //       message
// //       recipientName
// //       senderName
// //     }
// //   }
// // }
// // `)

//   // console.log("Result from gatsby-node file ===> ", result)

//   // result.data.Lollies.GetLollyByPath.forEach(({ lollyPath }) => {
//   //   console.log(lollyPath)
//   //   actions.createPage({
//   //     path: `lollies/${lollyPath}`,
//   //     component: path.resolve(`./src/template/lollyPage.jsx`),
//   //     context: {
//   //       lollies: lollyPath,
//   //     },
//   //   })
//   // })

 
//   // result.data.Lollies.getAllLollies.map((data) => {
//   //   createPage({
//   //     path: `${data.lollyPath}`,
//   //     component: path.resolve("./src/template/lollyPage.jsx"),
//   //     context: {
//   //       data: data,
//   //     },
//   //   });
//   // });

//   //////// SECOND METHOD
//   // exports.createPages = async ({ actions, graphql }) => {
//   //   const { data } = await graphql(`
//   //   query MyQuery {
//   //     Lollies {
//   //       getAllLollies {
//   //       lollyPath
//   //       }
//   //     }
//   //   }
//   //   `)

//   //   console.log("Data from gatsby-node file ===> ", data)

//   // result.data.Lollies.getAllLollies.forEach(({ lollyPath }) => {
//   //   actions.createPage({
//   //     path: `lollies/${lollyPath}`,
//   //     component: path.resolve(`./src/component/lollyPage.jsx`),
//   //     context: {
//   //       lollyPath: lollyPath,
//   //     },
//   //   })
//   // })

}