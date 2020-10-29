import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";
import ws from 'ws';

const headers = {'content-type': 'application/json'};
const getHeaders = () => {
  return headers;
};

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: "ws://localhost:8888/v1/graphql",
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      return { headers: getHeaders() };
    },
  },
});

const httpLink = new HttpLink({
  uri: "http://localhost:8888/v1/graphql",
  headers: getHeaders()
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link,
  cache
});

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
