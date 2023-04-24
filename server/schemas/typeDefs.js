import { gql } from 'apollo-server-express';

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
}

type Query {
    user: User
}

type Mutation {
    addUser(username: String!, password: String!, email: String!, firstName: String!, lastName: String!): Auth
    login(username: String!, password: String!): Auth
}
`;
// input User {
//     username: String!
//     password: String!
//     email: String!
//     firstName: String!
//     lastName: String!
// }

export default typeDefs;