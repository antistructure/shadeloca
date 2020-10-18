import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`A GraphQL server is ready at ${url}`)
})
