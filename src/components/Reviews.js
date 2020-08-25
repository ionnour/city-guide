import React, { Component } from 'react'
import {DataConsumer} from './context'
import ReviewCard from './ReviewCard'

export default class Reviews extends Component {
  render() {
    return (
      <DataConsumer>
        {
          data => {
            return data.reviews.map( person => {
              return <ReviewCard key={person.id} person={person}/>
            })
          }
        }
      </DataConsumer>
    )
  }
}
