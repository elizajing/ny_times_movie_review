import React, { Component } from 'react';
import './movieModal.scss';

class MovieModal extends Component{
    constructor(props){
        super(props);

        this.omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;
        this.omdbUrl = process.env.REACT_APP_URL;

        this.state={
            error: false,
            isLoaded: false,
            movieDetails: {}
        }
    }

    componentDidMount(){
        var url = this.omdbUrl + this.omdbApiKey;

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

        return (
        <div className={showHideClassName}>
            <section className={"modal-main"}>
                <h4>{title}</h4>
                <p>{date}</p>
                <p>{overview}</p>
            <button onClick={handleClose}>Close</button>
            </section>
        </div>
        )
    }
}

export default MovieModal;