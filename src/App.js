import React, { Component } from 'react';
import './App.scss';
import Reviews from './Reviews/reviews.js';
import InTheatres from './InTheatres/inTheatres';
import MostPopular from './MostPopular/mostPopular.js'
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      home: true,
      inTheatres: false,
      mostPopular: false,  
      reviews: false
    }
  }
//()=> lexical scoping,
// Arrow Functions lexically bind their context so this actually refers to the originating context
  handleReviewsClick = () =>{
    this.setState({
      reviews: true,
      home: false,
      inTheatres: false,
      mostPopular: false
    })
  }

  handleHomeClick = () =>{
    this.setState({
      reviews: false,
      home: true,
      inTheatres: false,
      mostPopular: false
    })
  }

  handleInTheatresClick = () =>{
    this.setState({
      reviews: false,
      home: false,
      inTheatres: true,
      mostPopular: false
    })
  }
  
  handleMostPopularClick = () => {
    this.setState({
      reviews: false,
      home: false,
      inTheatres: false,
      mostPopular: true
    })
  }
  render() {
    const {reviews, inTheatres, mostPopular} = this.state;
    let div;
    if(reviews){
      div = <Reviews />
    }else if(inTheatres){
      div = <InTheatres />
    }else if(mostPopular){
      div = <MostPopular />
    }else{
      div = <p className="p"><span>🐑 😬</span></p>
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
            <button className="button" onClick={this.handleMostPopularClick}><h1>Most Popular</h1></button>
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
