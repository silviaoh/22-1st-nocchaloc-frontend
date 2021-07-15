import React from 'react';
import './Slide.scss';

class Slide extends React.Component {
  render() {
    const { src, name, category } = this.props.video;
    return (
      <li className="slide">
        <div className="tea-video">
          <video className="video" autoPlay muted loop>
            <source src={src} />
          </video>
        </div>
        <div className="tea-info">
          <span className="tea-name">{category}</span>
          <div className="description">{name}</div>
        </div>
      </li>
    );
  }
}

export default Slide;
