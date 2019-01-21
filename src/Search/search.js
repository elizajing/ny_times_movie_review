import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.state = {isLoaded: false, items: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('----this.state.value: ' + this.state.value)
    this.setState({
      value: this.state.value
    }, () => {
      this.getSearchData(this.state.value);
    })

    event.preventDefault();
  }

  getSearchData(keyWord){
    var url = this.apiUrl + this.apiKey + "&query=" + keyWord;

    console.log('---url: '+ url)
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
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
