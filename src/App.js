import React, { Component } from 'react';
import './App.scss';
import Reviews from './Reviews/reviews.js';
import Search from './Search/search.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: false,
      search: false,
      home: true
    }
  }
//()=> lexical scoping,
// Arrow Functions lexically bind their context so this actually refers to the originating context
  handleReviewsClick = () =>{
    this.setState({
      reviews: true,
      search: false,
      home: false
    })
  }

  handleSearchClick = () =>{
    this.setState({
      reviews: false,
      search: true,
      home: false
    })
  }

  handleHomeClick = () =>{
    this.setState({
      reviews: false,
      search: false,
      home: true
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
      div = <p className="p">Find the latest movie reviews from New York Times magazine!</p>
    }
    return (
      <div>
        <div className="header">
          <div className="header-item">
            <button className="button" onClick={this.handleHomeClick}><h1>Hello!</h1></button>
          </div>
          <div className="header-item">
            <button className="button" onClick={this.handleReviewsClick}><h1>Latest Reviews</h1></button>
          </div>
          <div className="header-item">
            <button className="button" onClick={this.handleSearchClick}><h1>Find Reviews</h1></button>
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
