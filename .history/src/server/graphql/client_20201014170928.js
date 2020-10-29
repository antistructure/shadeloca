import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { WebSocketLink } from "apollo-link-ws"
import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { getMainDefinition } from "apollo-utilities"
import ws from 'ws'

const wsLink = process.browser ? new WebSocketLink({ // if you instantiate in the server, the error will be thrown
  uri: `ws://localhost:4000/subscriptions`,
  options: {
    reconnect: true
  }
});

const httplink = new HttpLink({
	uri: 'http://localhost:3000/graphql',
	credentials: 'same-origin'
});

const link = process.browser ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httplink,
);

// const wsLinkUri = `ws://${process.env.GRAPHQL_ENDPOINT}`

// const headers = {
//   'authorization': process.env.DB_AUTH_HEADERS,
//   'content-type': 'application/json'
// }
// const getHeaders = () => headers

// const cache = new InMemoryCache()

// const wsLink = new WebSocketLink({
//   // uri: "ws://localhost:8080/v1/graphql",
//   uri: wsLinkUri,
//   options: {
//     reconnect: true,
//     lazy: true,
//     connectionParams: () => {
//       return { headers: getHeaders() };
//     },
//     webSocketImpl: ws
//   },
// })

// const httpLink = new HttpLink({
//   // uri: "http://localhost:8080/v1/graphql",
//   uri: process.env.GRAPHQL_ENDPOINT,
//   headers: getHeaders()
// })

// const link = split(({ query }) => {
//     const { kind, operation } = getMainDefinition(query)
//     return kind === "OperationDefinition" && operation === "subscription"
//   },
//   wsLink,
//   httpLink
// );

// export const client = new ApolloClient({
//   link,
//   cache
// })
