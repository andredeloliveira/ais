import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {

  signUp(event) {
    event.preventDefault();
    let newUser = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    Accounts.createUser(newUser, (error) => {
      if (error) {
        console.log(error);
      } else {
        $('#optionsModal').closeModal();
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="grey-text">Cadastrar</h3>
          <form className="col s12" onSubmit={this.signUp}>
            <div className="row">
              <div className="input-field col s12">
              <label>Email</label>
                <input id="email" name="email" type="email" className="validate"/>
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
                <input type="submit" className="waves-effect waves-light btn-large" value="Cadastrar"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
