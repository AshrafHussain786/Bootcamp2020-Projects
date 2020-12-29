const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const axios = require("axios");
const q = faunadb.query;
const shortid = require("shortid");

const typeDefs = gql`
  type Query {
    hello: String  
    getAllLollies: [Lolly]!
    GetLollyBySlug(lollyPath: String!): Lolly  
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
    createLolly (
      recipientName: String!, 
      message: String!,
      senderName: String!, 
      flavourTop: String!,
      flavourMiddle: String!,
      flavourBottom: String!) : Lolly
  }
`
const client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET});
const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, Virtual Lolly....'
    },

    getAllLollies: async () => {
      var result = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("AllLollies"))),
          q.Lambda((x) => q.Get(x))
        )
      );
      let x = [];
      result.data.map((curr) => {
        x.push(curr.data);
      });

      return x;
    },

    GetLollyBySlug: async (_, { lollyPath }) => {
      console.log(path);
      try {
        const result = await client.query(
          q.Get(q.Match(q.Index("lolly_by_path"), lollyPath))
        );

        console.log(result)
        return result.data;
      } catch (error) {
        return error.toString();
      }
    },

  },
  Mutation : {
    createLolly: async (_, args) => {

        console.log("args = ",args);
      
      // const client = new faunadb.Client({secret: "fnAD9qsJ_eACBaFHv5e4p0hsChaTgf5agypjqWUo"});
      const id = shortid.generate();
      args.lollyPath = id

      try {
      const result = await client.query(
        q.Create(q.Collection("Lollies"), {
          data: args
        })
      );

      axios
          .post(process.env.NETLIFY_HOOK_URL)
          .then(function (response) {
             console.log(response);
          })
          .catch(function (error) {
             console.error(error);
          });
        
      return result.data
    } catch (error) {
      return error.toString();
    }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }