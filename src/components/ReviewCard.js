import React, { Component } from 'react'
import {DataConsumer} from './context'

export default class ReviewCard extends Component {
  render() {
    const {
      id,
      name,
      avatar,
      comment
    } = this.props.person

    return (
      <DataConsumer>
        {
          data => {
            return (
              <div className="media mt-5 " id={id}>
              <img src={avatar} alt={name}  style={{ width: '40px' }} className="mr-3"/>
              <div className="media-body">
                <h5 className="mt-0">{name}</h5>
                <p>{comment}</p>
              </div>
            </div>
            )
          }
        }
      </DataConsumer>
    )
  }
}
