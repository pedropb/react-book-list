import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <ul className='list-group col-sm-4'>
                <li className='list-group-item'>Javascript: The Good Parts</li>
                <li className='list-group-item'>Harry Potter</li>
                <li className='list-group-item'>The Dark Tower</li>
                <li className='list-group-item'>Eloquent Ruby</li>
            </ul>
        );
    }
}

export default BookList;