// Core
import ApolloClient from 'apollo-boost';

// GraphQL Server
const uri = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
  uri
});
