import React, { Component } from 'react';

export default class AISLoading extends Component {

  render() {
    imgSize = {
      width: "60px",
      height: "60px"
    }
    return (
      <div>
        <img style={imgSize} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/black_small.png" alt="loading"/>
        <p className="center">Carregando..</p>
      </div>
    )
  }

}
