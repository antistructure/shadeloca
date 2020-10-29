import gql from 'graphql-tag';

export const typeDefs = gql`
  directive @embedded on OBJECT
  directive @collection(name: String!) on OBJECT
  directive @index(name: String!) on FIELD_DEFINITION
  directive @resolver(
    name: String
    paginated: Boolean! = false
  ) on FIELD_DEFINITION
  directive @relation(name: String) on FIELD_DEFINITION
  directive @unique(index: String) on FIELD_DEFINITION

  type Mutation {
    createProduct(data: ProductInput!): Product!
    updateProduct(
      id: ID!
      data: ProductInput!
    ): Product
    deleteProduct(id: ID!): Product
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
    allProducts(
      _size: Int
      _cursor: String
    ): ProductPage!
  }
`;

