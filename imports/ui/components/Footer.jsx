import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright AIS - Ambientes Virtuais
            <a className="grey-text text-lighten-4 right" href="#!">Comprar Agora!</a>
            </div>
          </div>
        </footer>
    );
  }
}
