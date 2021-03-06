const { gql } = require('apollo-server-express');

const typeDefs = gql `
   type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
   }

   type Auth {
      token: ID!
      user: User
   }

   type Book {
      _id: ID
      bookId: String
      authors: [String]
      description: String
      title: String
      image: String
      link: String
   }

   type Query {
      me: User
   }

   input SavedBook {
      bookId: String
      authors: [String]
      description: String
      title: String
      image: String
      link: String
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(input: SavedBook!): User
      removeBook(bookId: ID!): User
   }
`;

module.exports = typeDefs;