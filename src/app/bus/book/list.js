// Core
import React from 'react';

// Hooks
import { useQueryAll } from './hooks/useQueryAll';

export const List = () => {
  const { loading, error, books, reload } = useQueryAll();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }

  const booksJSX = books.map(({id, title, author}) => (
    <p key={id}>
      <span>Author: {author}</span>
      <span>Title: {title}</span>
    </p>
  ));

  return (
    <>
      <h2>Books</h2>
      {booksJSX}
      <button type="button" onClick={reload}>Refetch</button>
    </>
  )
};
