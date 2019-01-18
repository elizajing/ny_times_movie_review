import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Reviews from './Reviews/reviews.js';
import Search from './Search/search.js';

class App extends Component {

  render() {

    return (
      <div className="container">
        <div className="reviews">
          <h1>Latest Reviews</h1>
          <Reviews />
        </div>
        <div className="search">
        <h1>Search</h1>

        <Search />
        </div>
      </div>

    );
  }
}

export default App;
