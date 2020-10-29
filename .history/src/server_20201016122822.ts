import dotenv from 'dotenv';
dotenv.config();

import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/app';

const app = express();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, () => {
		console.info(`Shadeloca server started on port ${PORT}`);
	});
