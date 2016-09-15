import React, { Component } from 'react';

export default class AddProduct extends Component {
  addNewProduct(event) {
    event.preventDefault();
    console.log('new product added')
  }
  render() {
    return (
      <div id="addProductModal" className="modal" >
        <div className="modal-content">
        <div className="modal-footer">
          <a href="" className=" modal-action modal-close waves-effect waves-green red lighten-1 btn right">X</a>
        </div>
          <div className="row">
            <div className="col s12 m12 l12">
              <form onSubmit={this.addNewProduct}>
                <div id="product-form">
                  <div className="row">
                    <div className="input-field col s12 m12 l12">
                      <input id="name" name="name" type="text" className="validate" required/>
                      <label>Nome</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m12 l12">
                      <input id="price" name="price" type="number" className="validate" required/>
                      <label>Preço</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m12 l12">
                      <input id="description" name="description" type="text" className="validate" required/>
                      <label>Descrição</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m12 l12">
                      <input type="submit" className="waves-effect waves-light btn-large" value="Adicionar Produto"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
