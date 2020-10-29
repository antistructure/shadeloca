import gql from 'graphql-tag';

export const typeDefs = gql`
  directive @signin on FIELD_DEFINITION

  type Query {
    me: User
    post(input: PostInput!): Post
    posts: [Post]!
    products: [Product]!
    user(id: ID!): User!
  }

  type Mutation {
    signIn(input: SignInInput!): AuthUser!
    signUp(input: SignUpInput!): AuthUser!
    changePermissions(input: PermissionsInput): User
    createPost(input: CreatePostInput): Post! @signin
  }

  type User {
    id: ID!
    email: String!
    avatar: String!
    permissions: Permissions!
    posts: [Post]!
  }

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

  input PermissionsInput {
    user: ID!
    createPost: Boolean
    editOwnPost: Boolean
    editAnyPost: Boolean
    deleteOwnPost: Boolean
    deleteAnyPost: Boolean
    createProduct: Boolean
    editOwnProduct: Boolean
    editAnyProduct: Boolean
    deleteOwnProduct: Boolean
    deleteAnyProduct: Boolean
  }

  type AuthUser {
    token: String!
    user: User!
  }

  type SignUpInput {
    email: String!
    password: String!
  }

  type SignInInput {
    email: String!
    password: String!
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

  input PostInput {
    id: ID
    slug: String
  }

  input CreatePostInput {
    title: String!
    html: String!
    slug: String # if not provided, Mongoose pre-validate will add it
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

  input ProductInput {
    brand: String
    name: String
    price: Float
  }

  input CreateProductInput {
    brand: String!
    name: String!
    price: Float!
  }
`;
