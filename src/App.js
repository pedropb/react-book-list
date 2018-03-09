import React, { Component } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div class='row'>
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
