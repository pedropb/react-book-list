import React, { Component } from 'react';
import BookDetail from './BookDetail';
import BookData from '../data/BooksData';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.data = new BookData();
    }

    state = {
        activeBook: null
    }

    selectBook(book) {
        this.setState({
            activeBook: book
        });
    }

    render() {
        return (
            <div class='row'>
                <ul className='list-group col-sm-4'>
                    {this.renderList()}
                </ul>
                <BookDetail
                    book={ this.state.activeBook }
                />
            </div>
        );
    }

    renderList() {
        const books = this.data.getAllBooks();

        return books.map((book) => (
            <li
                key={book.title}
                onClick={() => this.selectBook(book)}
                className='list-group-item'
            >
                {book.title}
            </li>
        ));
    }
}

export default BookList;