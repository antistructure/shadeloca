import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();
const server = new ApolloServer({ typeDefs });
server.applyMiddleware({ app });

app
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT =>{
		
	});

	app.listen({ port: 4000}, () => {
		console.log(`GraphQL server ready at http://localhost:4000${server.graphqlPath}`)
	});
