import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookDetail from '../components/BookDetail';
import BookData from '../data/BooksData';
import getActiveBook from '../selectors';
import selectBook from '../actions';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.data = new BookData();
    }

    render() {
        return (
            <div className='row'>
                <ul className='list-group col-sm-4'>
                    {this.renderList()}
                </ul>
                <BookDetail
                    book={ this.props.activeBook }
                />
            </div>
        );
    }

    renderList() {
        const books = this.data.getAllBooks();

        return books.map((book) => (
            <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className='list-group-item'
            >
                {book.title}
            </li>
        ));
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectBook }, dispatch)

export default connect(getActiveBook, mapDispatchToProps)(BookList);