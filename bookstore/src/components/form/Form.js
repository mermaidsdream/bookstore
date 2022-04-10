import { useState } from 'react';

export const Form = ({ addNewBook }) => {
    const [title, setTitle] = useState('');
    
    const onHandleAddNewBook = (e) => {
        e.preventDefault();
      
        if (title.length) {
            const newBook = {
                id: new Date().getTime(),
                status: false,
                title,
            };
            
            addNewBook(newBook);
        
            setTitle('');
        }
    };

    return (
        <form className='form-wrapper' onSubmit={onHandleAddNewBook}>
        <input 
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           type="text"
           placeholder="Title of book"
        />
          <button 
            type='submit' 
            className='add-new-button'
            disabled={!title.length}
            >
            Add new book
          </button>
      </form>
    );
};
