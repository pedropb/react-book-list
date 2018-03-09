import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div class='row'>
          <ul className='list-group col-sm-4'>
            <li className='list-group-item'>Javascript: The Good Parts</li>
            <li className='list-group-item'>Harry Potter</li>
            <li className='list-group-item'>The Dark Tower</li>
            <li className='list-group-item'>Eloquent Ruby</li>
          </ul>
          <div class='col-sm-8'>
            <h3>Details for:</h3>
            <div>Title: Some title</div>
            <div>Pages: # of pages</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
