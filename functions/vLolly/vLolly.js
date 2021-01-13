const { ApolloServer, gql } = require("apollo-server-lambda")

const faunadb = require("faunadb")
const axios = require("axios")
const q = faunadb.query
const shortid = require("shortid")

const typeDefs = gql`
  type Query {
    hello: String
    getAllLollies: [Lolly]!
    GetLollyByPath(lollyPath: String!): Lolly
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      recipientName: String!
      message: String!
      senderName: String!
      flavourTop: String!
      flavourMiddle: String!
      flavourBottom: String! 
      lollyPath: String!): Lolly
  }
`
// const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })
const resolvers = {
  Query: {
    hello: () => {
      return "Hello, Virtual Lolly...."
    },

    // getAllLollies: async () => {
    //   const client = new faunadb.Client({secret: "fnAD_TFlmQACBXLZo62NztTINQ7hszEaoxAqPnVR"});
    //   var result = await client.query(
    //     q.Map(
    //       q.Paginate(q.Match(q.Index("allLollies"))),
    //       q.Lambda(x => q.Get(x))
    //     )
    //   )
    //   return result.data.map(d => {
    //     return {
    //       recipientName: d.data.recipientName,
    //       sendersName: d.data.sendersName,
    //       flavourTop: d.data.flavorTop,
    //       flavourMiddle: d.data.flavorMid,
    //       flavourBottom: d.data.flavorBot,
    //       message: d.data.message,
    //       lollyPath: d.data.lollyPath,
    //     }
    //   })
    // },

    getAllLollies: async () => {
      const client = new faunadb.Client({secret: "fnAD_TFlmQACBXLZo62NztTINQ7hszEaoxAqPnVR"});

      var result = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("AllLollies"))),
          q.Lambda(x => q.Get(x))
        )
      )
      let x = []
      result.data.map(curr => {
        x.push(curr.data)
      })
      return x
    },

    GetLollyByPath: async (_, args) => {
      const client = new faunadb.Client({secret: "fnAD_TFlmQACBXLZo62NztTINQ7hszEaoxAqPnVR"});

      console.log(path)
      try {
        const result = await client.query(
          q.Get(q.Match(q.Index("lolly_by_path"), args.lollyPath))
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
      console.log("args = ", args)

      const client = new faunadb.Client({secret: "fnAD_TFlmQACBXLZo62NztTINQ7hszEaoxAqPnVR"});      
      // const id = shortid.generate()
      // args.lollyPath = id

      
        const result = await client.query(
          q.Create(q.Collection("Lollies"), {
            data: args,
          })
        )

        // axios
        //   .post("https://api.netlify.com/build_hooks/5feafc26ad5ebec8669f7949")
        //   .then(function (response) {
        //     console.log(response)
        //   })
        //   .catch(function (error) {
        //     console.error(error)
        //   })
        console.log("result ===> ", result)  
        console.log("result data ===> ", result.data)  
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
