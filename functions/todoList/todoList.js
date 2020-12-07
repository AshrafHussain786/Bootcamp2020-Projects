const { ApolloServer, gql } = require('apollo-server-lambda')
var faunadb = require('faunadb'),
  q = faunadb.query;

require("dotenv").config();

// The following are the "Schema" definition
const typeDefs = gql`
  type Query {
    todos: [Todo!]    
  }
  type Mutation {
    addTodo(task: String!): Todo,   
    delTask(id: ID!): Todo
    updateTask(id: ID!): Todo 
  }  
  type Todo {
    id: ID!
    task: String!
    status: Boolean!
  }
`
// The following is creation of client with Fauna Database
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

// The following are the "Resolver" definition
const resolvers = {
  Query: {
    todos: async (root, args, context) => {
      try {
        // var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

        const result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index('task'))),
            q.Lambda(x => q.Get(x))
          )
        )
        console.log("Result", result.data)
        return result.data.map(d => {
          return {
            id: d.ref.id,
            status: d.data.status,
            task: d.data.task
          }
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  
  Mutation: {
    addTodo: async (_, { task }) => {
      try {
        // var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
        const result = await client.query(
          q.Create(
            q.Collection('todos'),
            {
              data: {
                task: task,
                status: true
              }
            },
          )
        )
        return result.ref.data;
      }
      catch (err) {
        console.log(err)
      }
    },

    delTask: async (_, { id }) => {
      try {
        // var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
        // const newId = JSON.stringify(id)
        // console.log("ts ID in DelTask Mutation************", newId)
        console.log("ts ID in DelTask Mutation************", id)


        const result = await client.query(
          q.Delete(q.Ref(q.Collection("todos"), id))
        )
        console.log("result.ref.id in DelTask Mutation************", result.ref.id)
        return result.data
      } catch (error) { console.log(error) }
    }

  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }