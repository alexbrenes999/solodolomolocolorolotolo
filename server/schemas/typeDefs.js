import { gql } from 'apollo-server-express';

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
}

input createInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
}

input loginInput {
    username: String!
    password: String!
}

type Query {
    user(id: ID!): User
}

type Mutation {
    createUser(username: String!, password: String!, firstName: String!, lastName: String!): User
    loginUser(username: String!, password: String!): User
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