import React, { Component } from 'react';
import './MainSlide.scss';

class MainSlide extends Component {
  render() {
    return (
      <>
        <div className="main-slide-wrapper">
          <div className="main-slide">
            <div className="main-text">
              <h3 className="promo-title">
                <h2>{this.props.title}</h2>
              </h3>
              <p className="promo-date">
                <h2>{this.props.date}</h2>
              </p>
              <p className="promo-onepoint">
                <h2>{this.props.onepoint}</h2>
              </p>
            </div>
            <div className="img-slidebox-wrapper">
              <figure className="img-slidebox">
                <img alt="mainslide_img" src={this.props.img} />
              </figure>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainSlide;
