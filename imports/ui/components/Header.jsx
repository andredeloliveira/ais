import React, { Component } from 'react';
import HamburguerMenu from './HamburguerMenu';
import Logo from './Logo';

export default class Header extends Component {

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
            <Logo />
            <HamburguerMenu />
          </div>
        </nav>
      </div>
    );
  }

}
