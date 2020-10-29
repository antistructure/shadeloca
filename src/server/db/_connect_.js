import faunadb from 'faunadb';

const serverClient = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_KEY
});

const q = faunadb.query;

export {
  client,
  q
};
