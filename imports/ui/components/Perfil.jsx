import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProfileInfo } from '/imports/client/actions/users';

export default class Perfil extends Component {
  estadosOptions() {
    let estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','TO','SE']
    return estados.map( (sigla, index) => {
      return <option value={sigla} key={index}>{sigla}</option>
    })
  }
  componentDidMount() {
    $('#endereco-form').hide();
    $('#estado').material_select();
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
    const perfil = {
      nome: event.target.nome.value,
      telefone: event.target.telefone.value,
      endereco : {
        rua: event.target.rua.value,
        numero: event.target.numero.value,
        cidade: event.target.cidade.value,
        estado: event.target.estado.value,
        pais: 'BRA'
      }
    }
    let currentUser = Meteor.userId();
    dispatch(addProfileInfo(currentUser, perfil))
    Materialize.toast(this.props.shippingReducer.feedback, 4000)
  }
  render() {
    const { dispatch } = this.props ;
    return (
      <form onSubmit={this.saveShippingInfo.bind(this, dispatch)}>
        <div className="row">
          <div className="col s12 m6">
            <button onClick={this.mostrarEnderecoForm} className="waves-effect waves-light btn-large">+ info entrega</button>
          </div>
        </div>
        <div id="endereco-form">
        <div className="row">
          <div className="input-field col s12">
            <input id="nome" name="nome" type="text" className="validate"/>
            <label>Nome</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="telefone" name="telefone" type="text" className="validate"/>
            <label>Telefone</label>
          </div>
        </div>
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
          </div>
          <div className="row">
            <div className="input-field col s12">
              <select name="estado" id="estado">
                {this.estadosOptions()}
              </select>
              <label>Estado</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 left">
              <input type="submit" className="waves-effect waves-light btn-large" value="salvar informações"/>
            </div>
          </div>
          <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn-large">ocultar</button>
          </div>
          </div>
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    shippingReducer: state.shippingReducer
  }
}
export default connect(mapStateToProps)(Perfil)
