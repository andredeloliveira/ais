import React, { Component } from 'react';

export default class Logo extends Component {

  render() {
    const logoStyle = {
      marginTop: "-70px",
      height: "200px",
      width: "170px"
    };
    return (
      <a href="/" className="brand-logo"> <img style={logoStyle} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/Cardboard_S_Sem_Fundo.png" alt="Cardboards Logo" /> </a>
    )
  }
}
