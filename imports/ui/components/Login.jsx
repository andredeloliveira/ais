import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { FacebookOAuth } from './OAuth';

export default class Login extends Component {
  login(event) {
    event.preventDefault();
    console.log('login fired');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="grey-text">Entrar</h3>
          <p>redes sociais</p>
          <FacebookOAuth/>
          <p>ou e-mail </p>
          <form className="col s12" onSubmit={this.login}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" name="email" type="email" className="validate"/>
                <label>Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" name="password" type="password" className="validate"/>
                <label>Senha</label>
              </div>
            </div>
            <div className="row">
              <div className="col s6 left">
                <input type="submit" className="waves-effect waves-light btn-large" value="Entrar"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
