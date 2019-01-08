import { gql } from 'apollo-server'

export const userType = gql`
type User {
  id: ID!
  name: String
  lastname: String
  email: String
  password: String
}
`
