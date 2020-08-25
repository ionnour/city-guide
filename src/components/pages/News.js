import React, { Component } from 'react'
import {DataConsumer } from "../context"
import NewsCard from '../NewsCard'

export default class News extends Component {
  render() {
    return (
      <DataConsumer>
        {

          data => {
            return data.news.map(item => {
              return <NewsCard key={item.id} item={item}/>
            })
          }
        }
      </DataConsumer>
    )
  }
}
