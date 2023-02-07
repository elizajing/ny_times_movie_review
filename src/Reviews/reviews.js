import React, { Component, useEffect } from 'react';
import ReviewsList from '../ReviewsList/reviewsList.js';

class Reviews extends Component{
  constructor(props){
    super(props);
    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.state = {error: false, isLoaded: false, items: [], searchError: false, searchLoaded: false, searchRes: []}

    this.timeout = 0;
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('Data could not be fetched!');
    } else {
      return response.json();
    }
  }

  componentDidMount() {
    var url = this.apiUrl + this.apiKey;

    this.fetchData(url)
    .then((res) => {
      this.setState({
        isLoaded: true,
        items: res.results
      })
    }).catch((error) => {
      this.setState({
        isLoaded: true,
        error
      })
    })
  }

  handleKeyUp = (event) => {
    clearTimeout(this.timeout);

    const val = event.target.value
    if(val === ''){
      this.setState({
        searchLoaded: true,
        searchRes: this.state.items
      })
    }else{
      this.timeout = setTimeout(()=>{
        this.getSearchData(val)
      }, 600)
    }

  }

  getSearchData = (keyWord) => {
    var url = this.apiUrl + this.apiKey + "&query=" + keyWord;

    this.fetchData(url)
    .then((res) => {
      this.setState({
        searchLoaded: true,
        searchRes: res.results
      })
    }).catch((error) => {
      this.setState({
        searchLoaded: true,
        searchError: error
      })
    })

  }

  render(){
    const { error, isLoaded, items, searchError, searchLoaded, searchRes } = this.state;
    let div;

    if (error) {
      div =  <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      div =  <div className="loading">Loading...</div>;
    } else if (searchError){
      div = <div>Search failed: {searchError.message}</div>
    } else if (searchLoaded){
      div = <ReviewsList items={searchRes}/>
    } else {
      div =  <ReviewsList items={items} />
    }

    return(

      <div>
        <input type="text" className="input" onKeyUp={this.handleKeyUp} placeholder="search"/>
        {div}
      </div>

    )
  }
}
export default Reviews;
