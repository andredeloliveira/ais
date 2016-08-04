import React, { Component } from 'react';
import { connect } from 'react-redux';
import addShippingInfo from '/imports/client/actions/shipping';

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
  saveShippingInfo(dispatch, event) {
    event.preventDefault();
    const endereco = {
      rua: event.target.rua.value,
      numero: event.target.numero.value,
      cidade: event.target.cidade.value,
      estado: event.target.estado.value,
      pais: 'BRA'
    }
    let currentUser = Meteor.userId();
    dispatch(addShippingInfo(currentUser))
  }
  render() {
    const { dispatch } = this.props ;
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
                <input id="estado" name="estado" type="text" className="validate" placeholder="Ex. PR"/>
                <label>Estado</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6 left">
              <input type="submit" className="waves-effect waves-light btn-large" value="salvar endereço"/>
            </div>
          </div>
          <button className="waves-effect waves-light btn-large" onClick={this.ocultarEnderecoForm.bind(this, dispatch)}>ocultar</button>
        </div>
      </form>
    );
  }
}
export default connect()(Shipping)
