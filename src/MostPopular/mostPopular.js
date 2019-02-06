import React, { Component } from 'react';
import '../InTheatres/inTheatres.scss';
import MdbPage from '../MdbPage/mdbPage.js';

class MostPopular extends Component{
constructor(props){
      super(props);
      this.discoverUrl = process.env.REACT_APP_MDB_URL_DISCOVER;
      this.mostPopularUrl = process.env.REACT_APP_MDB_MOST_POPULAR;
      this.mdbApiKey = process.env.REACT_APP_MDB_API_KEY;
      this.configurationUrl = process.env.REACT_APP_MDB_CONFIGURATION_URL;
    }

    render(){
        const url = this.discoverUrl + this.mdbApiKey + '&' + this.mostPopularUrl;
        const configurationPath = this.configurationUrl + this.mdbApiKey; 
        
        return <MdbPage url={url} configurationPath={configurationPath} />
    }
}

export default MostPopular;