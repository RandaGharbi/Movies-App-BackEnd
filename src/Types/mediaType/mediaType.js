import { gql } from 'apollo-server'

export const Media = gql`
type Media {
  _id: ID!
  Title: String
  Year: String
  Genre: String
  Plot: String
  Poster: String
  imdbRating: String
}
`
