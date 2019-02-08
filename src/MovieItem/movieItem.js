import React, { Component } from 'react';
import './movieItem.scss';
import not_found from '../assets/not_found.svg';
import MovieModal from '../MovieModal/movieModal.js';

class MovieItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            newOverview: '',
            isChanged: false,
            showModal: false
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
    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    render(){
        const {image, date, title, title_link, overview} = this.props;
        const {newOverview, isChanged} = this.state;
        
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
                        <button onClick={this.showModal} className="more-info">More...</button>
                    </div>
                    ): (
                        <div className="overview">{overview}</div>
                    )}
                </div>
                
                <MovieModal
                    show={this.state.showModal}
                    handleClose={this.hideModal}
                    image={image}
                    date={date}
                    title={title}
                    overview={overview}
                    />
                
            </div>
        );
    }
}

export default MovieItem;