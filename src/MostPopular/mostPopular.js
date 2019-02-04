import React, { Component } from 'react';
import MovieItem from '../MovieItem/movieItem.js';
import './mostPopular.scss';

class MostPopular extends Component{
constructor(props){
      super(props);
      this.baseUrl = process.env.REACT_APP_MDB_URL_DISCOVER;
      this.mostPopularUrl = process.env.REACT_APP_MDB_MOST_POPULAR;
      this.mdbApiKey = process.env.REACT_APP_MDB_API_KEY;
      this.configurationPath = process.env.REACT_APP_MDB_CONFIGURATION_URL;
      this.state = this.state = {error: false, isLoaded: false, items: [], images: []};
    }

    componentDidMount() {
        var url = this.baseUrl + this.mdbApiKey + '&' + this.mostPopularUrl;
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
        var configurationUrl = this.configurationPath + this.mdbApiKey
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
        return(
            <div className="movies-grid">
                {div}
                {items.map(item => (
                <MovieItem 
                    image={item.poster_path} 
                    date={item.release_date}
                    title={item.title}
                    overview={item.overview} />
                ))}
            </div>
            
        );
    }
}

export default MostPopular;