import React, { Component } from 'react';

export default class SlideShow extends Component {

  mappedImages() {
    return '';
  }
  componentDidMount() {
      $('.carousel').carousel({full_width: true});
  }
  render() {
    const slideShowStyle = {
      maxHeight: "100%",
      minHeight: "400px",
      borderRadius: "10px"
    }
    return (
      <div className="carousel carousel-slider">
        <a className="carousel-item" href=""><img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/card-frente.png" style={slideShowStyle} /></a>
        <a className="carousel-item" href=""><img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/card-front.png" style={slideShowStyle} /></a>
        <a className="carousel-item" href=""><img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/card-lateral1.png" style={slideShowStyle} /></a>
        <a className="carousel-item" href=""><img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/card-lateral2.png" style={slideShowStyle} /></a>
      </div>
    )
  }
}
