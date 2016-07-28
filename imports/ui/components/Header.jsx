import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper deep-purple lighten-4">
            <a href="#!" className="brand-logo">AIS</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="">Login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}
