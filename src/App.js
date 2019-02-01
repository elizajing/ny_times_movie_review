import React, { Component } from 'react';
import './App.scss';
import Reviews from './Reviews/reviews.js';
import InTheatres from './InTheatres/inTheatres';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: false,
      home: true,
      inTheatres: false
    }
  }
//()=> lexical scoping,
// Arrow Functions lexically bind their context so this actually refers to the originating context
  handleReviewsClick = () =>{
    this.setState({
      reviews: true,
      home: false,
      inTheatres: false
    })
  }

  handleHomeClick = () =>{
    this.setState({
      reviews: false,
      home: true,
      inTheatres: false
    })
  }

  handleInTheatresClick = () =>{
    this.setState({
      reviews: false,
      home: false,
      inTheatres: true
    })
  }  
  render() {
    const {reviews, inTheatres} = this.state;
    let div;
    if(reviews){
      div = <Reviews />
    }else if(inTheatres){
      div = <InTheatres />
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
            <button className="button" onClick={this.handleInTheatresClick}><h1>In Theatres</h1></button>
          </div>
          <div className="header-item">
            <button className="button"><h1>Most Popular</h1></button>
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
