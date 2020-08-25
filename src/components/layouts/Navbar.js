import React from 'react'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'
//import { withTheme } from 'styled-components'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
      <Link className="navbar-brand ml-2" to="/">
        <img src={logo} alt="logo" style={{width:'35px'}}></img>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span ><i className="fa fa-bars" style={{color: "#fff"}}></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-2" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase ml-2" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase ml-2" to="/contacts">Contact</Link>
          </li>
        
        </ul>
        <form className="form-inline my-2 my-lg-0 mr-5">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      </div>
    </nav>
  )
};
