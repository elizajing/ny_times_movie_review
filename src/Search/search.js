import React, { Component } from 'react';
import './search.css';
import '../Reviews/reviews.scss';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.state = {isLoaded: false, items: []};
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.timeout = 0;
  }

  handleKeyUp(event){
    clearTimeout(this.timeout);

    const val = event.target.value
    if(val === ''){
      this.setState({
        isLoaded: true,
        items: []
      })
    }else{
      this.timeout = setTimeout(()=>{
        this.getSearchData(val)
      }, 500)
    }

  }

  getSearchData(keyWord){
    var url = this.apiUrl + this.apiKey + "&query=" + keyWord;

    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            keyWord: keyWord,
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            keyWord: keyWord,
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){

    return (
        <div className="results">
          <input type="text" onKeyUp={this.handleKeyUp} placeholder="search"/>
          <div className="list-container">
            {this.state.items.map(item => (
              <div className="list-item" key={item.display_title}>
                <div className="list-row">
                  <div className="list-date-item">
                    {item.publication_date}
                  </div>
                  <div className="list-row-item">
                    <a href={item.link.url} className="link"><b>{item.display_title}</b></a>
                    {item.summary_short}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      );


  }
}

export default Search;
