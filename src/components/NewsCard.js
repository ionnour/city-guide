import React, { Component } from 'react'
import {DataConsumer} from './context'
import {Link} from 'react-router-dom'

export default class NewsCard extends Component {
  render() {
    const {id, newsTitle, newsText} = this.props.item;

    return (
      <DataConsumer>
        {
          data => (
            <div className="card container mt-2 mb-3 p-5">
              <div className="card-body">
                <h5 key={id} className="card-title">
                  {newsTitle}
                </h5>
                <p className="card-text">{newsText}</p>
                <Link to="/" className="card-link">
                  Read More 
                </Link>
              </div>
            </div>
          )
        }
      </DataConsumer>
    )
  }
}
