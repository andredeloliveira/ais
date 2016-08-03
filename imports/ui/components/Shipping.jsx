import React, { Component } from 'react';

export default class Shipping extends Component {
  saveShippingInfo() {
    console.log('shipping info saved');
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.saveShippingInfo}>
        <div className="row">
          <div className="input-field col s12">
            <input id="rua" name="rua" type="text" className="validate"/>
            <label>Rua</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="numero" name="numero" type="text" className="validate"/>
            <label>Numero</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="cidade" name="cidade" type="text" className="validate"/>
            <label>Cidade</label>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="bairro" name="bairro" type="text" className="validate"/>
              <label>Estado</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6 left">
            <input type="submit" className="waves-effect waves-light btn-large" value="salvar endereço"/>
          </div>
        </div>
      </form>
    );
  }
}
