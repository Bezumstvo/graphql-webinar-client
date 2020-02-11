// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryBooks = loader('./gql/queryBooks.graphql');

export const useQueryAll = () => {
  const { loading, error, data, refetch } = useQuery(queryBooks);

  const books = data ? data.books : null;

  const reload = () => {
    refetch();
  };

  return {
    books,
    loading,
    error,
    reload
  }
};
