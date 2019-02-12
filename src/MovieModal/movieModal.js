import React, { Component } from 'react';
import './movieModal.scss';
import not_found from '../assets/not_found.svg';
import '../MovieItem/movieItem.scss';

class MovieModal extends Component{
    constructor(props){
        super(props);

        this.omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;
        this.omdbUrl = process.env.REACT_APP_OMDB_URL;

        this.state={
            error: false,
            isLoaded: false,
            movieDetails: {}
        }
    }
    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    handleClick = (e) => {
        if (this.node.contains(e.target)){
            return
        }
        
        this.props.handleClose();
    }
    componentDidMount(){
        const title = this.props.title;
        const year = this.props.date.split('-')[0]
        var url = this.omdbUrl + this.omdbApiKey + '&t=' + title + '&y=' + year;
        
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                movieDetails: result
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
        const {show, handleClose, image, date, title, overview} = this.props;
        
        const {error, isLoaded, movieDetails} = this.state;
        const showHideClassName = show ? "modal display-block" : "modal display-none";    
        let div;
        
        if(error){
            div = <div>Something went wrong: {error.message}</div>
        }else if(!isLoaded){
            div = <div>Loading...</div> 
        }
        //TODO: handle when a movie is not found in OMDB
        return (
            
            <div className={showHideClassName}>
                {div}
                <div ref={node => this.node = node}>
                    <section className="modal-main">
                        <div className="horizontal-img">
                            <div className="img-container">
                                    {image === null ? <img src={not_found} alt="pic"></img> : <img src={image} alt="pic"></img>} 
                            </div>
                        </div>
                        <div className="horizontal-item">
                            <div style={{margin: "4%"}}><b>{title}</b></div>
                            <div className="date">{date}</div>
                            <div className="info"> {movieDetails.imdbRating}/10</div>
                            <div className="info"><b>Director:</b> {movieDetails.Director}</div>                        
                            <div className="info"><b>Actors:</b> {movieDetails.Actors}</div>
                            <div className="overview">{overview}</div>
                        </div>
                        
                        <button className="horizontal-x" onClick={handleClose}>X</button>
                    </section>
                </div>
            </div>
        
        )
    }
}

export default MovieModal;