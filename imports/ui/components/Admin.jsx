import React, { Component } from 'react';

export default class Admin extends Component {

  render() {
    const cardImageSize = {
      height: "200px",
      width: "200px"
    }
    return(
    <div>
      <div className="row">
        <div className="col l12 m12 s12 center container">
          <h1>Bem-vindo ao modo administrador!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card medium">
            <span className="card-title">Produtos</span>
            <div className="card-image">
              <img style={cardImageSize} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/google-play.png" />
            </div>
            <div className="card-action center">
              <a href="#">Adicionar</a>
              <a href="#">Atualizar</a>
              <a href="#">Remover</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
