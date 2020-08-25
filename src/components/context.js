import React, { Component } from 'react'
import {placeInfo, reviews, detailInfo, news} from '../data';




const DataContext = React.createContext();



//Provider
//Consumer

class DataProvider extends Component {

  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news
  }; 
  render() {
    return (
      <DataContext.Provider value = {
        {
          info: this.state.info,
          reviews: this.state.reviews,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
        }
      }>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

const DataConsumer = DataContext.Consumer;

export {DataProvider, DataConsumer};


