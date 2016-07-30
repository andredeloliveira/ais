import React, { Component } from 'react';
import OptionsModal from './OptionsModal';
export default class Home extends Component {
  render() {
    let fistImageStyle = {
      background: "url('https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/caracomcardboard.jpg')",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };
    let firstParagraphStyle = {
      fontSize: "2.3em",
      margin: "0",
      padding: "17%",
    };
    let buttonContainerStyle = {
      marginLeft: "45%",
      paddingBottom: "45px"
    };
    return (
      <div>
      <div style={fistImageStyle}>
        <h1 className="white-text" style={firstParagraphStyle}>Uma nova perspectiva do mundo</h1>
        <div style={buttonContainerStyle}>
          <button className="waves-effect waves-light btn-large">Comprar</button>
        </div>
      </div>
        <OptionsModal/>
      </div>

    );
  }

}
