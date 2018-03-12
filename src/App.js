import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BookList from './containers/BookList';
import BookListApp from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(BookListApp)}>
        <BookList />
      </Provider>
    );
  }
}

export default App;
