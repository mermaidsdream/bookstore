import React from 'react';
import { Book } from '../book/Book';

export const Books = ({ books, removeBook, changeStatus }) => {
  if (!books.length) {
    return <h1>There is no books</h1>;
  }  
  
  return (
          <ul className='todo-list'>
            {books.map(({ id, title, status }, idx) => (
              <Book 
                key={id}
                count={idx + 1}
                title={title}
                status={status}
                id={id}
                removeBook={removeBook}
                changeStatus={changeStatus}
              />
            ))}
          </ul>
    );
};
