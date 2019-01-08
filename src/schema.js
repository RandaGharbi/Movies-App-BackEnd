import { gql } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import { userType } from './Types/userType/user'
// import { Media } from './Types/mediaType/mediaType'

import { userQuery } from './Query/users/user'
import { moviesQuery } from './Query/movies/moviesQuery'
import { seriesQuery } from './Query/series/seriesQuery'

import { userResolvers } from './Resolvers/user/userResolvers'
import { seriesResolvers } from './Resolvers/series/seriesResolvers'
import { moviesResolvers } from './Resolvers/movies/moviesResolvers'

// const typeDefs = gql`
// ${userType}
// ${Media}
// type RootQuery {
//   ${userQuery}
//   ${moviesQuery}
//   ${seriesQuery}
// }
// schema {
//   query: RootQuery
// }
// `

const typeDefs = gql`
type Media {
  _id: ID!
  Title: String
  Year: String
  Genre: String
  Plot: String
  Poster: String
  imdbRating: String
}

  ${userType}

type RootQuery {
  ${moviesQuery}
  ${seriesQuery}
  ${userQuery}
}
schema {
  query: RootQuery
}
`
const resolvers = {
  RootQuery: {
    ...userResolvers,
    ...seriesResolvers,
    ...moviesResolvers
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
export default schema
