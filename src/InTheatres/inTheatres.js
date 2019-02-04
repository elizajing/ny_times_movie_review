import React, { Component } from 'react';
import '../Reviews/reviews.scss';
import not_found from '../assets/not_found.svg';

class InTheatres extends Component{
  constructor(props){
    super(props);
    this.items = [];
    this.apiKey = process.env.REACT_APP_MDB_API_KEY;
    this.discoverUrl = process.env.REACT_APP_MDB_URL_DISCOVER;
    this.from = process.env.REACT_APP_MDB_FROM;
    this.to = process.env.REACT_APP_MDB_TO;
    this.configurationPath = process.env.REACT_APP_MDB_CONFIGURATION_URL;

    this.state = {error: false, isLoaded: false, items: [], images: []};
  }

  getCurrentMonthDate(){
    var date = new Date(); 
    var currentMonth = date.getMonth();
    var lastDate = new Date(date.getFullYear(), date.getMonth()+1,0);

    return [currentMonth+1, lastDate.getDate()];

  }
  componentDidMount(){
    var [month, lastDate]= this.getCurrentMonthDate();
    var date = new Date();
    var url = this.discoverUrl + this.apiKey + '&' + this.from + '=' + date.getFullYear() +'-'+ month + '-01&' + this.to + '=' + date.getFullYear() + '-' + month + '-' + lastDate;

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
    .then(
      ()=>{
        var images = this.getPosters(this.state.items);
        this.setState({
          images: images
        });
      }
    )
  }

  getPosters(list){
    var size = 'w342';
    var configurationUrl = this.configurationPath + this.apiKey
    let imageUrlList;
    let baseUrl;
    
    fetch(configurationUrl)
      .then(res => res.json())
      .then(
        (result) => {
          baseUrl = result.images.base_url;
        },
        (error) => {
          this.setState({
            error
          });
        }  
      )
      .then(
        () => {
          var items = list.map(item => {
            var imageUrl = null;
            if(item.poster_path !== null){
              imageUrl = baseUrl + size + item.poster_path;
            }
            item.poster_path = imageUrl;
            return item;
          });
          this.setState({
            items: items
          })
        }
      )

    return imageUrlList;

  }
  render(){
    const {error, isLoaded, items} = this.state
    let div;

    if(error){
      div = <div>Something went wrong: {error.message}</div>
    }else if(!isLoaded){
      div = <div>Loading...</div>
    }

    return (
      <div className="list-container">
      {div}
      {items.map(item => (
        <div className="list-item" key={item.title}>
          <div className="list-row">
            <div className="img-div">
              {item.poster_path === null ? <img src={not_found} alt="pic"></img> : <img src={item.poster_path} alt="pic"></img>}
            </div>
            
            <div className="list-row-item">
              <div className="list-date-item">
                {item.release_date}
              </div>
              
              <b>{item.title}</b>
              {item.overview}
            </div>
            
          </div>
        </div>
      ))}
    </div>
    );
  }
}

export default InTheatres;
