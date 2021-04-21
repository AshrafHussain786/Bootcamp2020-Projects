const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
const axios = require("axios")
const q = faunadb.query;
require("dotenv").config();
// const shortid = require("shortid")

const typeDefs = gql`
  type Query {
    hello: String!
    getAllLollies: [Lolly!]
    GetLollyByPath(lollyPath: String): Lolly
  }
  type Lolly {
    recipientName: String
    message: String
    senderName: String
    flavourTop: String
    flavourMiddle: String
    flavourBottom: String
    lollyPath: String
  }
  type Mutation {
    createLolly(
      recipientName: String
      message: String
      senderName: String
      flavourTop: String
      flavourMiddle: String
      flavourBottom: String
      lollyPath: String
    ): Lolly
  }
`;

// const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })
// const client = new faunadb.Client({secret: "fnAD_TFlmQACBXLZo62NztTINQ7hszEaoxAqPnVR"});
const client = new faunadb.Client({secret: "fnAEHU0m0DACAY7STKHZnXRDcHE9z4i6EOltAmtW"});

const resolvers = {
  Query: {
    hello: () => {
      return "Hello, Virtual Lolly...."
    },
    
    // getAllLollies: async () => {
    //   var result = await client.query(
    //     q.Map(q.Paginate(q.Match(q.Index(`allLollies`))),
    //       q.Lambda(x => q.Get(x))
    //     )
    //   )
    //   console.log(result)
    //   return result.data.map(d => {
    //     return {
    //       recipientName: d.data.recipientName,
    //       senderName: d.data.senderName,
    //       flavourTop: d.data.flavourTop,
    //       flavourMiddle: d.data.flavourMiddle,
    //       flavourBottom: d.data.flavourBottom,
    //       message: d.data.message,
    //       lollyPath: d.data.lollyPath,
    //     }
    //   })
    // },

    getAllLollies: async (root, args, context) => {
      var result = await client.query(
        q.Map(q.Paginate(q.Match(q.Index("lolly"))),
          q.Lambda("x", q.Get(q.Var("x")))
        )
      );
      let x = [];
      result.data.map((curr) => {
        x.push(curr.data);
      });
      return x;
    },

    // getAllLollies: async () => {
    //   var result = await client.query(
    //     q.Map(q.Paginate(q.Match(q.Index("lolly_by_path"))),
    //       q.Lambda("x", q.Get("x"))
    //     )
    //   )
    //   // query.Map(
    //   //   query.Paginate(query.Match(query.Index("lolly_by_path"))),
    //   //   query.Lambda("x", query.Get(query.Var("x")))
    //   // )
    //   let x = []
    //   console.log("Result in getAllLollies query in vLolly file: ", result)
    //   result.data.map(curr => {
    //     x.push(curr.data)
    //   })
    //   return x
    // },

    // getAllLollies: async (root, args, context) => {
    //   try {
    //     const client = new faunadb.Client({
    //       secret: process.env.FAUNADB_SERVER_SECRET,
    //     })
    //     const result = await client.query(
    //       query.Map(
    //         query.Paginate(query.Match(query.Index("lolly_by_path"))),
    //         query.Lambda("x", query.Get(query.Var("x")))
    //       )
    //     )
    //     return result.data.map(d => {
    //       return {
    //         id: d.ref.id,
    //         flavourTop: d.data.flavourTop,
    //         flavourMiddle: d.data.flavourMiddle,
    //         flavourBottom: d.data.flavourBottom,
    //         recipientName: d.data.recipientName,
    //         message: d.data.message,
    //         senderName: d.data.senderName,
    //         lollyPath: d.data.lollyPath,
    //       }
    //     })
    //   } catch (error) {
    //     console.log("Error in fetching Data : ", error)
    //   }
    // },

    // getAllLollies: async () => {
    //   var result = await client.query(
    //     q.Map(
    //       q.Paginate(q.Documents(q.Collection("Lollies"))),
    //       q.Lambda(x => q.Get(x))
    //     )
    //   )
    //   console.log(result)
    //   return result.data.map(d => {
    //     return {
    //       recipientName: d.data.recipientName,
    //       senderName: d.data.senderName,
    //       flavourTop: d.data.flavourTop,
    //       flavourMiddle: d.data.flavourMiddle,
    //       flavourBottom: d.data.flavourBottom,
    //       message: d.data.message,
    //       lollyPath: d.data.lollyPath,
    //     }
    //   })
    // },

    GetLollyByPath: async (_, { lollyPath }) => {

      console.log(lollyPath)
      try {
        const result = await client.query(
          q.Get(q.Match(q.Index("lolly_by_path"), lollyPath))
        )

        console.log(result)
        return result.data
      } catch (error) {
        return error.toString()
      }
    },
  },

  Mutation: {
    createLolly: async (_, args) => {
      // The following will be shown on command prompt
      console.log("args in Mutation of vLolly file are: ", args)

      // const client = new faunadb.Client({secret: "fnAD_TFlmQACBXLZo62NztTINQ7hszEaoxAqPnVR"});
      // const id = shortid.generate()
      // args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("Lollies"), {
          data: args,
        })
      )

      axios
        .post("https://api.netlify.com/build_hooks/604b164845c7c46856c68ce9")
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.error(error)
        })

      // The following will be shown on command prompt
      console.log("result in vLolly file ==========> ", result)
      console.log("result.ref in vLolly file ======> ", result.ref)
      console.log("result.ref.id in vLolly file ===> ", result.ref.id)
      console.log("result.data in vLolly file =====> ", result.data)
      return result.data

      // } catch (error) {
      //   return error.toString()
      // }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }

// ==============================================================
// const { ApolloServer, gql } = require("apollo-server-lambda");
// const axios = require("axios");
// const faunadb = require("faunadb");
// const query = faunadb.query;

// const typeDefs = gql`
//   type Lolly {
//     flavourTop: String!
//     flavourMiddle: String!
//     flavourBottom: String!
//     recipientName: String!
//     message: String!
//     senderName: String!
//     lollyPath: String!
//   }
//   type Query {
//     getAllLollies: [Lolly!]
//   }
//   type Mutation {
//     createLolly(
//       flavourTop: String!
//       flavourMiddle: String!
//       flavourBottom: String!
//       recipientName: String!
//       message: String!
//       senderName: String!
//       lollyPath: String!
//     ): Lolly
//   }
// `;

// const resolvers = {
//   Query: {
//     getAllLollies: async (root, args, context) => {
//       try {
//         const client = new faunadb.Client({
//           secret: process.env.FAUNA_LOLLY_SECRET,
//         });

//         const result = await client.query(
//           query.Map(
//             query.Paginate(query.Match(query.Index("lolly_by_path"))),
//             query.Lambda("x", query.Get(query.Var("x")))
//           )
//         );

//         return result.data.map((d) => {
//           return {
//             id: d.ref.id,
//             flavourTop: d.data.flavourTop,
//             flavourMiddle: d.data.flavourMiddle,
//             flavourBottom: d.data.flavourBottom,
//             recipientName: d.data.recipientName,
//             message: d.data.message,
//             senderName: d.data.senderName,
//             lollyPath: d.data.lollyPath,
//           };
//         });
//       } catch (error) {
//         console.log("Error in fetching Data : ", error);
//       }
//     },
//   },

//   Mutation: {
//     createLolly: async (
//       _,
//       {
//         flavourTop,
//         flavourMiddle,
//         flavourBottom,
//         recipientName,
//         message,
//         senderName,
//         lollyPath,
//       }
//     ) => {
//       try {
//         const client = new faunadb.Client({
//           secret: process.env.FAUNA_LOLLY_SECRET,
//         });

//         const result = await client.query(
//           query.Create(query.Collection("Lollies"), {
//             data: {
//               flavourTop: flavourTop,
//               flavourMiddle: flavourMiddle,
//               flavourBottom: flavourBottom,
//               recipientName: recipientName,
//               message: message,
//               senderName: senderName,
//               lollyPath: lollyPath,
//             },
//           })
//         );

//         axios
//           .post("https://api.netlify.com/build_hooks/604b164845c7c46856c68ce9")
//           .then(function (response) {
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.error(error);
//           });

//         return {
//           id: result.ref.id,
//           flavourTop: result.data.flavourTop,
//           flavourMiddle: result.data.flavourMiddle,
//           flavourBottom: result.data.flavourBottom,
//           recipientName: result.data.recipientName,
//           message: result.data.message,
//           senderName: result.data.senderName,
//           lollyPath: result.data.lollyPath,
//         };
//       } catch (error) {
//         console.log("Error in Adding Data : ", error);
//       }
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const handler = server.createHandler();

// module.exports = { handler };
