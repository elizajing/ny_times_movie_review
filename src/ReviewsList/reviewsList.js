import React, { Component } from 'react';

class ReviewsList extends Component{
  constructor(props){
    super(props);
    this.items = [];
  }

  render(){
    const {items} = this.props
    //item.multimedia can be null on some items
    return (
      <div className="list-container">
        {items.map(item => (
          <div className="list-item" key={item.display_title}>
            <div className="list-row">
              <div className="list-date-item">
                {item.publication_date}
              </div>
              <div className="list-row-item">
                <a href={item.link.url} className="link"><b>{item.display_title}</b></a>
                {item.summary_short}
              </div>
              <div className="imge-div">
                <img src={item.multimedia.src} alt="pic"></img>
              </div>

            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewsList;
