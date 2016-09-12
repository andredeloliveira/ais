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
      height: "auto",
    }
    return (
      <div className="carousel carousel-slider">
        <a className="carousel-item" href="#one!"><img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/garota-cardboard.jpg" style={slideShowStyle} /></a>
        <a className="carousel-item" href="#two!"><img src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/garota-cardboard.jpg" style={slideShowStyle} /></a>
      </div>
    )
  }
}
