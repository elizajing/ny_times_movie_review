import React, { Component } from 'react';
import './App.scss';
import Reviews from './Reviews/reviews.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: false,
      home: true
    }
  }
//()=> lexical scoping,
// Arrow Functions lexically bind their context so this actually refers to the originating context
  handleReviewsClick = () =>{
    this.setState({
      reviews: true,
      home: false
    })
  }

  handleHomeClick = () =>{
    this.setState({
      reviews: false,
      home: true
    })
  }

  render() {
    const {reviews} = this.state;
    let div;
    if(reviews){
      div = <Reviews />
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
            <button className="button" onClick={this.handleReviewsClick}><h1>Reviews</h1></button>
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
