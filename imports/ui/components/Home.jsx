import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    let fistImageStyle = {
      background: "url('https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/caracomcardboard.jpg')",
      height: "700px",
      width: "100%",
      objectFit: "fill"
    }
    let firstParagraphStyle = {
      color: "#FFFFFF",
      fontSize: "2.3em",
      margin: "0",
      padding: "16.4%",
    }
    return (
      <div style={fistImageStyle}>
        <h1 className="grey-text lighten-2" style={firstParagraphStyle}>Uma nova perspectiva do mundo</h1>
      </div>
    );
  }

}
