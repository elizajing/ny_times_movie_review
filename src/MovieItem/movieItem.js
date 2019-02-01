import React, { Component } from 'react';
import './movieItem.scss';
import not_found from '../assets/not_found.svg';

class MovieItem extends Component{
    
    render(){
        const {image, date, title, overview} = this.props;
        return(
            <div className="wrapper">
                <div className="horizontal-item">
                    <div className="img-container">
                         {image === null ? <img src={not_found} alt="pic"></img> : <img src={image} alt="pic"></img>} 
                    </div>
                </div>
                <div className="horizontal-item">
                    <div className="title">{title}</div>
                    <div className="date">{date}</div>
                    <div className="overview">{overview}</div>
                </div>
                
            </div>
        );
    }
}

export default MovieItem;