import React, { Component } from 'react';
import './movieItem.scss';
import not_found from '../assets/not_found.svg';

class MovieItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            newOverview: '',
            isChanged: false
        };
    }
    componentDidMount(){
        const text = this.props.overview;   
        const newOverview = this.checkOverviewSize(text);
        if(text !== newOverview){
            this.setState({
                newOverview: newOverview,
                isChanged: true
            })
        }
        
    }
    checkOverviewSize(text){
        var overview = text;
        if(overview.length > 300){
            overview = overview.slice(0, 200);
        }

        return overview;
    }

    render(){
        const {image, date, title, title_link, overview} = this.props;
        const {newOverview, isChanged} = this.state;
        console.log('---overview: '+ JSON.stringify(overview))
        return(
            <div className="wrapper">
                <div className="horizontal-img">
                    <div className="img-container">
                         {image === null ? <img src={not_found} alt="pic"></img> : <img src={image} alt="pic"></img>} 
                    </div>
                </div>
                <div className="horizontal-item">
                    <div className="title"><a href={title_link} className="link"><b>{title}</b></a></div>
                    <div className="date">{date}</div>
                    
                    {isChanged === true ? 
                    (
                    <div>
                        <div className="overview">{newOverview}...</div>
                        <a href={title_link} className="more-info">More...</a>
                    </div>
                    ): (
                        <div className="overview">{overview}</div>
                    )}
                    
                    
                    
                </div>
                
            </div>
        );
    }
}

export default MovieItem;