import React, { Component } from 'react';
import './search.css';

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
    this.timeout = setTimeout(()=>{
      this.getSearchData(val)
    }, 500)
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
          <input type="text" onKeyUp={this.handleKeyUp} />
          <ul>
            {this.state.items.map(item => (
              <li key={item.display_title}>
                <h2>{item.display_title}</h2>
                <p>{item.summary_short}</p>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default Search;
