const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    phone_no: String
    age: Int
    address: String
    pincode: Int
    city: String
    state: String
    country: String
    isVerified: Int
    isEmailVerified: Boolean
    token: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User!]! # Define the 'users' query here
    user(id: ID!): User
  }
`;

module.exports = typeDefs;
