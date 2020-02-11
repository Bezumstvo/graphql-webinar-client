// Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

// Domains
import { Book } from './bus/book';

// Other
import { client } from './init/client';

export const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Book />
      </ApolloProvider>
    </>
  )
};
