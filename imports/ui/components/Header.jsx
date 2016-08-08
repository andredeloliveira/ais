import React, { Component } from 'react';
import HamburguerMenu from './HamburguerMenu';
export default class Header extends Component {

  render() {
    logoStyle= {
      marginTop: "-70px",
      width: "170px",
      height: "200px"
    }
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
            <a href="/" className="brand-logo"> <img style={logoStyle} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/Cardboard_S_Sem_Fundo.png" alt="Cardboards Logo" /> </a>
            <HamburguerMenu />
          </div>
        </nav>
      </div>
    );
  }

}
