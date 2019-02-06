import React, { Component } from 'react';
import MdbPage from '../MdbPage/mdbPage.js';
import './inTheatres.scss';

class InTheatres extends Component{
  constructor(props){
    super(props);
    this.items = [];
    this.mdbApiKey = process.env.REACT_APP_MDB_API_KEY;
    this.discoverUrl = process.env.REACT_APP_MDB_URL_DISCOVER;
    this.from = process.env.REACT_APP_MDB_FROM;
    this.to = process.env.REACT_APP_MDB_TO;
    this.configurationUrl = process.env.REACT_APP_MDB_CONFIGURATION_URL;
  }

  getCurrentMonthDate(){
    var date = new Date(); 
    var currentMonth = date.getMonth();
    var lastDate = new Date(date.getFullYear(), date.getMonth()+1,0);

    return [currentMonth+1, lastDate.getDate()];

  }
  getUrls(){
    var [month, lastDate]= this.getCurrentMonthDate();
    var date = new Date();
    var url = this.discoverUrl + this.mdbApiKey + '&' + this.from + '=' + date.getFullYear() +'-'+ month + '-01&' + this.to + '=' + date.getFullYear() + '-' + month + '-' + lastDate;
    var configurationPath = this.configurationUrl + this.mdbApiKey;
    return [url, configurationPath];
  }

  render(){
    const [url, configurationPath] = this.getUrls();
    return <MdbPage url={url} configurationPath={configurationPath} />
  }
}

export default InTheatres;
