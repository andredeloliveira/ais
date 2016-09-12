import React, { Component } from 'react';

export default class CardBoardS extends Component {

  render() {
    const cardBoardStyle = {
        maxWidth: "100%"
    };
    return (
      <div>
        <img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/Cardboard_S_Sem_Fundo-cropped.png" style={cardBoardStyle}  alt="CardBoardS logo"  />
      </div>
    )
  }
}
