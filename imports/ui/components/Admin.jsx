import React, { Component } from 'react';
import AddProduct from './admin/AddProduct'


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
        <div className="col s12 m6 l6">
          <div className="card">
            <span className="card-title">Produtos</span>
            <div className="card-image">
              <img style={cardImageSize} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/google-play.png" />
            </div>
            <div className="card-action center">
              <a className="modal-trigger" href="#addProductModal">Adicionar</a>
              <a className="modal-trigger" href="#viewProductsList">Visualizar</a>
            </div>
          </div>
        </div>
        <div className="col s12 m6 s6">
          <div className="card">
            <span className="card-title">Pedidos</span>
            <div className="card-image">
              <img style={cardImageSize} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/google-play.png" />
            </div>
            <div className="card-action center">
              <a href="#">Visualizar</a>
              <a href="#">Editar</a>
            </div>
          </div>
        </div>
      </div>
      <AddProduct />
    </div>
    )
  }
}
