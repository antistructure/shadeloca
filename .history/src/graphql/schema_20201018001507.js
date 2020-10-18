import { gql } from 'apollo-server-express';

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
  
  type PostUpdateResponse {
    success: Boolean!
    message: String
    post: Post
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

  type ProductUpdateResponse {
    success: Boolean!
    message: String
    products: [Product]
  }

  type User {
    id: ID!
    email: String!
    image: String!
    permissions: Permissions!
    posts: [Post]!
  }

  type UserUpdateResponse {
    success: Boolean!
    message: String
    users: [User]
  }
`;
