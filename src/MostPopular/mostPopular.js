import React, { Component } from 'react';
import MovieItem from '../MovieItem/movieItem.js';
import './mostPopular.scss';

class MostPopular extends Component{
constructor(props){
      super(props);
      this.image = 'http://image.tmdb.org/t/p/w342/gt5KPtwDMeIOPdVfmjYlFw9EetE.jpg';
      this.date = '2019-01-31';
      this.title = 'Glass';
      this.overview = 'In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.'
    }

    render(){
        return(
            <div className="movies-grid">
                <MovieItem 
                image={this.image}
                date={this.date}
                title={this.title}
                overview={this.overview}
                />
                <MovieItem 
                image={this.image}
                date={this.date}
                title={this.title}
                overview={this.overview}
                />
                <MovieItem 
                image={this.image}
                date={this.date}
                title={this.title}
                overview={this.overview}
                />
                <MovieItem 
                image={this.image}
                date={this.date}
                title={this.title}
                overview={this.overview}
                />
                <MovieItem 
                image={this.image}
                date={this.date}
                title={this.title}
                overview={this.overview}
                />
            </div>
            
        );
    }
}

export default MostPopular;