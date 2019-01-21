import React, { Component } from 'react';
import './App.scss';
import Reviews from './Reviews/reviews.js';
import Search from './Search/search.js';

class App extends Component {
  constructor(props){
    super(props);

    this.handleReviewsClick = this.handleReviewsClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);

    this.state = {
      reviews: false,
      search: false,
      home: true
    }
  }

  handleReviewsClick(){
    this.setState({
      reviews: true,
      search: false,
      home: false
    })
  }

  handleSearchClick(){
    this.setState({
      reviews: false,
      search: true,
      home: false
    })
  }
  
  render() {
    const {reviews, search} = this.state;
    let div;

    if(reviews){
      div = <Reviews />
    }else if(search){
      div = <Search />
    }else{
      div = <p>Find the latest movie reviews from New York Times magazine!</p>
    }
    return (
      <div>
        <div className="header">
          <div className="header-item">
            <button className="button" onClick={this.handleReviewsClick}><h1>Latest Reviews</h1></button>
          </div>
          <div className="header-item">
            <button className="button" onClick={this.handleSearchClick}><h1>Find</h1></button>
          </div>
        </div>
        <div className="container">
          {div}
        </div>
      </div>
    );
  }
}

export default App;
