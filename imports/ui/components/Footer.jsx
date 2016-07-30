import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

export default class Footer extends Component {

  render() {
    return (
        <footer className="page-footer white">
            <div className="container row">
              <div className="col s6">© 2016 Copyright AIS - Ambientes Virtuais</div>
              <SocialMedia/>
            </div>
        </footer>
    );
  }
}
