import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

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
          <form class="col s12" onSubmit={this.login}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" name="email" type="email" className="validate"/>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" name="password" type="password" className="validate"/>
                <label for="password">Senha</label>
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
