import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Permissions {
    createPost: Boolean!
    editOwnPost: Boolean!
    editAnyPost: Boolean!
    deleteOwnPost: Boolean!
    deleteAnyPost: Boolean!
    createProduct: Boolean!
    editOwnProduct: Boolean!
    editAnyProduct: Boolean!
    deleteOwnProduct: Boolean!
    deleteAnyProduct: Boolean!
  }

  type Post {
    id: ID!
    title: String!
    slug: String!
    html: String!
    isFeatured: Boolean!
    author: User!
    isDeleted: Boolean!
  }

  type Product {
    brand: String!
    name: String!
    description: String
    productLink: String
    imageLink: String
    productType: String
    category: String
    tags: [String]
    price: Float!
    rating: Float
  }

  type User {
    id: ID!
    email: String!
    image: String!
    permissions: Permissions!
    posts: [Post]!
  }
`;
