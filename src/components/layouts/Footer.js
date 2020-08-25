import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer className="main-footer bg-info">
      <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Chisinau str.A Russo 2/1</li>
              <li>Tel: +777-777-777</li>
              <li>Gkokok</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Sponsors</h4>
            <ul className="list-unstyled">
              <li><a href="/">Leror</a></li>
              <li><a href="/">Teromeria</a></li>
              <li><a href="/">PFL</a></li>
              <li><a href="/">Corato</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Sponsors</h4>
            <ul className="list-unstyled">
              <li><a href="/">Leror</a></li>
              <li><a href="/">Teromeria</a></li>
              <li><a href="/">PFL</a></li>
              <li><a href="/">Corato</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Sponsors</h4>
            <ul className="list-unstyled">
              <li><a href="/">Leror</a></li>
              <li><a href="/">Teromeria</a></li>
              <li><a href="/">PFL</a></li>
              <li><a href="/">Corato</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center">
          &copy;{new Date().getFullYear()} Chisinau Guide - All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </FooterContainer>
  )
}


const FooterContainer = styled.footer`
  .footer-middle{
    color: var(--mainWhite);
    padding-top: 3rem;

  }
  .footer-bottom{
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainLightGray);
  }
  ul li a:hover{
    color: var(--mainWhite);
  }
`;