import React, { Component } from 'react';
import './reviews.scss';

class Reviews extends Component{
  constructor(props){
    super(props);
    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.state = {isLoaded: false, items: []}
  }
  componentDidMount() {
    var url = this.apiUrl + this.apiKey;

    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
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
                <div className="img-div">
                  <img src={item.multimedia.src} alt="pic"></img>
                </div>

              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default Reviews;
