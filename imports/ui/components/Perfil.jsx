import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
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
      telefone: {
        ddd: event.target.ddd.value,
        telefone: event.target.telefone.value
      },
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
    Materialize.toast(this.props.shippingReducer.feedback, 2000)
  }
  render() {
    const { dispatch } = this.props ;
    let profile = undefined;
    let endereco = undefined;
    if (this.props.currentUser.profile) {
      profile  = this.props.currentUser.profile;
      endereco  = this.props.currentUser.profile.endereco;
    }
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
            <input id="nome" name="nome" type="text" className="validate" defaultValue={profile ? profile.nome : ''}/>
            <label>Nome</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
            <input id="ddd" name="ddd" type="text" className="validate" defaultValue={profile ? profile.telefone.ddd : ''}/>
            <label>DDD</label>
          </div>
          <div className="input-field col s9">
            <input id="telefone" name="telefone" type="text" className="validate" defaultValue={profile ? profile.telefone.telefone : ''}/>
            <label>Telefone</label>
          </div>
        </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="rua" name="rua" type="text" className="validate" defaultValue={endereco ? endereco.rua : ''}/>
              <label>Rua</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="numero" name="numero" type="text" className="validate" defaultValue={endereco ? endereco.numero : ''}/>
              <label>Numero</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="cidade" name="cidade" type="text" className="validate" defaultValue={endereco ? endereco.cidade : ''}/>
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
