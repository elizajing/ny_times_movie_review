import React, { Component } from 'react';
import not_found from '../assets/not_found.svg';
import '../Reviews/reviews.scss';

class ReviewsList extends Component{
  
  render(){
    const {items} = this.props
    //item.multimedia can be null on some items
    return (
      <div className="list-container">
        {items.map(item => (
          <div className="list-item" key={item.display_title}>
            <div className="list-row">
              <div className="img-div">
                {item.multimedia === null ? <img src={not_found} alt="pic"></img> : <img src={item.multimedia.src} alt="pic"></img>}
              </div>
              <div className="list-row-item">
                <div className="list-date-item">
                  {item.publication_date}
                </div>
                <a href={item.link.url} className="link"><b>{item.display_title}</b></a>
                {item.summary_short}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewsList;
