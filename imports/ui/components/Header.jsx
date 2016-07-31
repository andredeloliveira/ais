import React, { Component } from 'react';
import HamburguerMenu from './HamburguerMenu';
export default class Header extends Component {

  render() {

    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
            <a href="/" className="brand-logo"> <img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/black_small.png" alt="Logo AIS" /> </a>
            <HamburguerMenu />
          </div>
        </nav>
      </div>
    );
  }

}
