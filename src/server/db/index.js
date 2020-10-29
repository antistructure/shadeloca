export * from './connect';

import config from 'config';

const hostname = config.get('mongoDb.hostname');
const port = config.get('mongoDb.port');
const dbName = config.get('mongoDb.dbName');

export const dbUrl = `mongodb://${hostname}:${port}/${dbName}`;
