import React, { Component } from 'react';
import {DataConsumer} from './context';
import {Link} from 'react-router-dom';

export default class Info extends Component {
  render() {

    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img
    } = this.props.item;

    return (
      <DataConsumer>
        {
          (data) => (
            <div className="col-10 col-lg-4 mx-auto mb-5" key={id}>
              <div className ="card" style={{width:'18rem'}}>
                <img alt={headerTitle} src={img} className="card-img-top"></img>
                <div className="card-body">
                  <h3 className="card-title text-uppercase">{headerTitle}</h3>
                  <h5 className="card-title">{headerSubTitle}</h5>
                  <p className="card-text">{headerText}</p>
                  <Link
                    to="/details"
                    className="btn btn-outline-primary text-uppercase"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </DataConsumer>
    )
  }
}
