import React from 'react';

export const Statistics = ({ all, isRead, isNotRead, removeAllBooks }) => {
  return (
    <div className='statistics-container'>
        <ul className='statistics-list'>
            <li className='statistics-list-item-all'>All: {all}</li>
            <li className='statistics-list-item-read'>Read: {isRead}</li>
            <li className='statistics-list-item-notread'>Not read: {isNotRead}</li>
        </ul>
        <button 
          onClick={removeAllBooks}
          className='statistics-remove-button'>
            Remove All
        </button>
    </div>
  );
};
