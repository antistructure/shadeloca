import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';

const app = express();

const server = new ApolloServer({ typeDefs });
server.applyMiddleware({ app });

app.listen({ port: 4000}, () => {
  console.log(`GraphQL server ready at http://localhost:4000${server.graphqlPath}`)
});
