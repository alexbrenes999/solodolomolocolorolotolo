import { gql } from 'apollo-server-express';

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
}

input RegisterInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    confirmPassword: String!
}

input LoginInput {
    username: String!
    password: String!
}

type Query {
    user(id: ID!): User
}

type Mutation {
    registerUser(username: String!, password: String!, firstName: String!, lastName: String!): User
    loginUser(username: String!, password: String!): User
}
`;

export default typeDefs;