import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Contacts extends Component {
  render() {
    return (
      
            
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Contacts</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                title="Here we are!"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174147.87650780866!2d28.718093435435854!3d46.99978363574422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdQ!5e0!3m2!1sen!2s!4v1595255943388!5m2!1sen!2s"
                style={{
                  border: '0',
                  width: '100%',
                  height: '315px',
                  frameborder: '0'
                }}
                allowFullscreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
              
            
         
    )
  }
}
