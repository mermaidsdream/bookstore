import { useState } from 'react';

import { Book, Books, Form, Statistics } from './components';
import BOOKS from './store/books.json';

import './App.css';

function App() {
  const [books, setBooks] = useState(BOOKS);

  const removeBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }
  
  const changeStatus = (id) => {
    const idx = books.findIndex(book => book.id === id);

    setBooks((prev) => [
      ...prev.slice(0, idx), 
      {...prev[idx], status: !prev[idx].status }, 
      ...prev.slice(idx + 1),
    ]);
  };

  const addNewBook = (obj) => {
    setBooks((prev) => [...prev, obj]);
  }

  const removeAllBooks = () => {
    setBooks([]);
  }

  const statistic = {
    all: books.length,
    isRead: books.filter(book => book.status === true).length,
    isNotRead: books.filter(book => book.status === false).length
  }
  // all = books.length;
  // isRead = books.filter(book => status === true).length;
  // isNotRead = books.filter(book => status === false).length;

  return (
    <div className='container'>
      <Form 
        addNewBook={addNewBook}
      />
      {/* <button onClick={removeAllBooks}>Remove All</button> */}
      <Statistics 
        // all={all} 
        // isRead={isRead} 
        // isNotRead={isNotRead} 
        {...statistic}
        removeAllBooks={() => setBooks([])}
      />
      <Books 
        books={books}
        removeBook={removeBook}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
