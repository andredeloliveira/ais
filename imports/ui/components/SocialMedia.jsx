import React, { Component } from 'react';

export default class SocialMedia extends Component {
  render() {
    let iconStyle = {
      fontSize: "1.2em"
    };
    let anchorStyle = {
      color: "black !important"
    };
    return (
      <div className="col s6 right">
        <a href="" className="text-black"><i style={iconStyle} className="fa fa-facebook right"></i></a>
        <a href="" className="text-black"><i style={iconStyle} className="fa fa-twitter right"></i></a>
        <a href="" className="text-black"><i style={iconStyle} className="fa fa-google-plus right"></i></a>
      </div>
    );
  }
}
