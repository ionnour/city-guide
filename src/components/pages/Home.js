import React, { Component } from 'react'
import {DataConsumer} from '../context';
import Info from '../Info';

export default class Home extends Component {
  render() {
    return (


      <div className="container">
        <div className="row mt-5">
          <DataConsumer>
          {
            data => {
           
            return data.info.map(item => {
              return <Info key={item.id} item={item} />
            })
            }
          }
          </DataConsumer>
        </div>
      </div>
      
    )
  }
}
