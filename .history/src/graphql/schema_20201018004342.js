import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Mutation {
    deletePermissions(id: ID!): Permissions
    updateUser(
      id: ID!
      data: UserInput!
    ): User
    createUser(data: UserInput!): User!
    createPermissions(data: PermissionsInput!): Permissions!
    updatePost(
      id: ID!
      data: PostInput!
    ): Post
    updatePermissions(
      id: ID!
      data: PermissionsInput!
    ): Permissions
    deleteUser(id: ID!): User
    deletePost(id: ID!): Post
    createProduct(data: ProductInput!): Product!
    createPost(data: PostInput!): Post!
    updateProduct(
      id: ID!
      data: ProductInput!
    ): Product
    deleteProduct(id: ID!): Product
  }

  type Permissions {
    editOwnPost: Boolean!
    editOwnProduct: Boolean!
    deleteAnyPost: Boolean!
    _id: ID!
    deleteOwnPost: Boolean!
    editAnyPost: Boolean!
    deleteAnyProduct: Boolean!
    deleteOwnProduct: Boolean!
    editAnyProduct: Boolean!
    createProduct: Boolean!
    createPost: Boolean!
    _ts: Long!
  }

  input PermissionsInput {
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
    author: User!
    _id: ID!
    isFeatured: Boolean!
    slug: String!
    id: ID!
    isDeleted: Boolean!
    title: String!
    html: String!
    _ts: Long!
  }

  input PostAuthorRelation {
    create: UserInput
    connect: ID
  }

  input PostInput {
    id: ID!
    title: String!
    slug: String!
    html: String!
    isFeatured: Boolean!
    author: PostAuthorRelation
    isDeleted: Boolean!
  }

  type Product {
    name: String!
    updatedAt: Time
    description: String
    _id: ID!
    tags: [String]
    price: Float!
    productLink: String
    productType: String
    brand: String!
    rating: Float
    createdAt: Time
    category: String
    imageLink: String
    _ts: Long!
  }

  input ProductInput {
    name: String!
    updatedAt: Time
    description: String
    tags: [String]
    price: Float!
    productLink: String
    productType: String
    brand: String!
    rating: Float
    createdAt: Time
    category: String
    imageLink: String
  }

  type ProductPage {
    data: [Product]!
    after: String
    before: String
  }

  type Query {
    findProductByID(id: ID!): Product
    findPostByID(id: ID!): Post
    allProducts(
      _size: Int
      _cursor: String
    ): ProductPage!
    findUserByID(id: ID!): User
    findPermissionsByID(id: ID!): Permissions
  }

  type User {
    avatar: String!
    posts: [Post]!
    email: String!
    _id: ID!
    permissions: Permissions!
    id: ID!
    _ts: Long!
  }

  input UserInput {
    id: ID!
    email: String!
    avatar: String!
    permissions: UserPermissionsRelation
    posts: [ID]!
  }

  input UserPermissionsRelation {
    create: PermissionsInput
    connect: ID
  }
`;
