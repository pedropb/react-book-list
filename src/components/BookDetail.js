import React from 'react';

const BookDetail = ( { book } ) =>
    (
        <div className='col-sm-8'>
            <h3>Details for:</h3>
            <div>Title: {book ? book.title : ''}</div>
            <div>Pages: {book ? book.pages : ''} </div>
        </div>
    );

export default BookDetail;