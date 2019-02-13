import React, { Component } from 'react';
import './App.scss';
import Reviews from './Reviews/reviews.js';
import InTheatres from './InTheatres/inTheatres.js';
import MostPopular from './MostPopular/mostPopular.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      home: true,
      inTheatres: false,
      mostPopular: false,  
      reviews: false
    }
    library.add(faStar);
  }
  // Arrow Functions lexically bind their context so this actually refers to the originating context
  //()=> lexical scoping,
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
    const {home, reviews, inTheatres, mostPopular} = this.state;
    let div;

    if(reviews){
      div = <Reviews />
    }else if(inTheatres){
      div = <InTheatres />
    }else if(mostPopular){
      div = <MostPopular />
    }else{
      div =  <div className="emoji"><span role="img" aria-label="smojies"> 🎬 🎥 🍿 😬 </span></div>
    }
    return (
      <div>
        <div className="header">
          <div className="header-item">
            <span className={home ? 'item-selected' : 'button'} onClick={this.handleHomeClick}><h2>News</h2></span>
          </div>
          <div className="header-item">
            <span className={inTheatres ? 'item-selected' : 'button'} onClick={this.handleInTheatresClick}><h2>In Theatres</h2></span>
          </div>
          <div className="header-item">
            <span className={mostPopular ? 'item-selected' : 'button'} onClick={this.handleMostPopularClick}><h2>Most Popular</h2></span>
          </div>
          <div className="header-item">
            <span className={reviews ? 'item-selected' : 'button'} onClick={this.handleReviewsClick}><h2>Reviews</h2></span>
          </div>
        </div>
        
        <div className="line"></div>
        
        <div className="container">
          {div}
        </div>
      </div>
    );
  }
}

export default App;
