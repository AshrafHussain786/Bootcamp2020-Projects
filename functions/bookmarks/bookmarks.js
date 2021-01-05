const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb'),
  q = faunadb.query;

require("dotenv").config();

const typeDefs = gql`  
  type Query {
    bookmarks: [Bookmark!]
  }
  type Bookmark {
    id: ID!
    url: String!
    desc: String!
  }
  type Mutation {
    addBookmark(url: String!, desc: String!): Bookmark
    delBookmark(id: ID!): Bookmark
  }
`

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

const resolvers = {
  Query: {
    bookmarks: async (root, args, context) => {
      try{        
        const result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("url"))),
            q.Lambda(x => q.Get(x))
          )
        )
        return result.data.map(d => {
          return {
            id: d.ref.id,
            url: d.data.url,
            desc: d.data.desc,
          }
        })
      }
      catch(err){
        console.log('err',err);
      }
    }
  },
  Mutation: {
    addBookmark: async (_, {url,desc}) => {
      try {        
        const result = await client.query(
          q.Create(
            q.Collection('links'),
            { data: { 
              url,
              desc
             } },
          )
        );
        console.log("Document Created and Inserted in Container: " + result.ref.id);
        return result.ref.data
      } 
      catch (error){
          console.log('Error: ', error);          
      }      
    },

    delBookmark: async (_, { id }) => {
      try {
        const result = await client.query(
          q.Delete(q.Ref(q.Collection("links"), id))
        )
        console.log("result.ref.id in DelBookmark Mutation************", result.ref.id)
        return result.data
      } catch (error) { console.log(error) }
    },
    
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()