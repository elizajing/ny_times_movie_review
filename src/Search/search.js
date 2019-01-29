import React, { Component } from 'react';
import './search.css';
import '../Reviews/reviews.scss';
import ReviewsList from '../ReviewsList/reviewsList.js';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.state = {isLoaded: false, items: []};

    this.timeout = 0;
  }

  handleKeyUp = (event) => {
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

  getSearchData = (keyWord) => {
    var url = this.apiUrl + this.apiKey + "&query=" + keyWord;

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
    let div ;

    if (error) {
      div = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      div = '';
    } else {
      div = <ReviewsList items={items} />
    }
    return (
      <div className="results">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="search"/>
        {div}
      </div>
    )
  }
}

export default Search;
