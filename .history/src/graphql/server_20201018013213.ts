import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';

export const startGraphQLServer = async (): Promise<any> => new ApolloServer({ typeDefs });
