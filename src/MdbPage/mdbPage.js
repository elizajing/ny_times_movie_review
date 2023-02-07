import React, { Component } from 'react';
import MovieItem from '../MovieItem/movieItem.js';

class MdbPage extends Component{
    constructor(props){
        super(props);
        this.state = {error: false, isLoaded: false, items: []};
    }

    fetchData = async (url) => {
      const response = await fetch(url);

      if(!response.ok){
        throw new Error('Data could not be fetched!');
      } else {
        return response.json();
      }
    }
    componentDidMount(){
        var url = this.props.url;

        this.fetchData(url)
        .then((result) => {
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
          })
        .then(
            ()=>{
                this.getPosters(this.state.items);
            }
        )

        // .then(res => res.json())
        // fetch(url)
        // .then(
        //     (result) => {
        //     this.setState({
        //         isLoaded: true,
        //         items: result.results
        //     });
        //     },
        //     (error) => {
        //     this.setState({
        //         isLoaded: true,
        //         error
        //     });
        //     }
        // )
        // .then(
        //     ()=>{
        //         this.getPosters(this.state.items);
        //     }
        // )
    }

    getPosters(list){
        var size = 'w342';
        var configurationUrl = this.props.configurationPath;
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
    
      }


    render(){
        const {error, isLoaded, items} = this.state
        let div;
        
        if(error){
        div = <div>Something went wrong: {error.message}</div>
        }else if(!isLoaded){
        div = <div>Loading...</div>
        }
        if(items.length === 0) {
          div = <div>No movies in theatres right now...</div>
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

export default MdbPage;
