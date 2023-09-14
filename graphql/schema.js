const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]! # Define the 'users' query here
    user(id: ID!): User
  }
`;

module.exports = typeDefs;
