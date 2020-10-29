import faunadb from 'faunadb'

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_KEY
})

const q = faunadb.query

export { client, q }
