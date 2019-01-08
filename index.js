import { ApolloServer } from 'apollo-server'
import schema from './src/schema'
import MoviesAPI from './src/DataSources/MoviesAPI'

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    moviesAPI: new MoviesAPI()
  }),
  context: () => ({
    baseUrl: 'https://forja.tn/api/',
  }),
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
