import React, { Component } from 'react';

export default class Shipping extends Component {
  componentDidMount() {
    $('#endereco-form').hide();
  }
  ocultarEnderecoForm(event) {
    event.preventDefault();
    $('#endereco-form').hide();
  }
  mostrarEnderecoForm(event) {
    event.preventDefault();
    $('#endereco-form').show();
  }
  saveShippingInfo(event) {
    event.preventDefault();
    //  Meteor.call('saveShippingInfo')
  }
  render() {
    return (
      <form className="col s12 m5" onSubmit={this.saveShippingInfo}>
        <div className="row">
          <button onClick={this.mostrarEnderecoForm} className="waves-effect waves-light btn-large">Adicionar Endereço de Entrega</button>
        </div>
        <div id="endereco-form">
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
          <button className="waves-effect waves-light btn-large" onClick={this.ocultarEnderecoForm}>ocultar</button>
        </div>
      </form>
    );
  }
}
