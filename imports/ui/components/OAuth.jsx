import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export class FacebookOAuth extends Component {
  loginWithFacebook() {
    Meteor.loginWithFacebook({}, (error) => {
      if (error) {
        console.log(error);
      } else {
        FlowRouter.go('checkout');
      }
    });
  }

  render() {
    let buttonStyle = {
      width: "100%",
      marginBottom: "5px"
    }
    return (
      <button style={buttonStyle} className="waves-effect waves-light blue darken-4 btn-large" onClick={this.loginWithFacebook}>
          <i className="fa fa-facebook"></i> facebook
      </button>
    );
  }
}

export class TwitterOAuth extends Component {
  loginWithTwitter() {
    Meteor.loginWithTwitter({}, (error) => {
      if (error) {
        console.log(error);
      } else {
        FlowRouter.go('checkout');
      }
    })
  }

  render() {
    let buttonStyle = {
      width: "100%",
      marginBottom: "5px"
    }
    return (
      <button style={buttonStyle} className="waves-effect waves-light blue lighten-2 btn-large" onClick={this.loginWithTwitter}>
          <i className="fa fa-twitter"></i> twitter
      </button>
    );
  }
}

export class GoogleOAuth extends Component {
  loginWithGoogle() {
    Meteor.loginWithGoogle({}, (error) => {
      if (error) {
        console.log(error);
      } else {
        //TODO(ao): figure a way to check where this action was taken to redirect to the right place;
        FlowRouter.go('checkout');
      }
    });
  }

  render() {
    let buttonStyle = {
      width: "100%",
      marginBottom: "5px"
    }
    return (
      <button style={buttonStyle} className="waves-effect waves-light red darken-4 btn-large" onClick={this.loginWithGoogle}>
          <i className="fa fa-google-plus"></i> google
      </button>
    );
  }
}
