import React from 'react';

export const Book = ({ count, title, removeBook, id, changeStatus, status }) => {
    const titleStyle = status ? 'isRead' : '';
    
    
    return (
        <div className='book-wrapper'>
            <span>{count}</span>
            <p className={titleStyle}>{title}</p>
            <div className={'row'}>
            <button 
                onClick={() => changeStatus(id)}
                className='complete-button'>
                  <i>✔️</i>
                </button>
                <button 
                onClick={() => removeBook(id)}
                className='trash-button'>
                  <i>❌</i>
            </button>
            </div>
        </div>
    );
};
