import dotenv from 'dotenv';
dotenv.config();

import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import proxyMiddleware from 'http-proxy-middleware';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const server = express();

const devProxy = {
	'/.netlify': {
		target: 'http://localhost:8888',
		pathRewrite: { '^/.netlify/functions': '' }
	}
}

if (dev && devProxy) {
	Object.keys(devProxy).forEach(context => {
		server.use(proxyMiddleware(context, devProxy[context]));
	});
}

server
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
