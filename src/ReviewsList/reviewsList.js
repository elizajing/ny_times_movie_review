import React, { Component } from 'react';
import MovieItem from '../MovieItem/movieItem.js';
import '../InTheatres/inTheatres.scss';

class ReviewsList extends Component{
  
  render(){
    const {items} = this.props
    return (
      <div className="movies-grid">
        {items.map(item => (
          <MovieItem 
          image={item.multimedia.src} 
          date={item.publication_date}
          title={item.display_title}
          title_link={item.link.url}
          overview={item.summary_short} />
          ))}
      </div>
    );
  }
}

export default ReviewsList;
