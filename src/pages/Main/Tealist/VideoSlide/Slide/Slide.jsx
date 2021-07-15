import React from 'react';
import './Slide.scss';

class Slide extends React.Component {
  render() {
    const { name, description, video_url } = this.props.video;
    return (
      <li className="slide">
        <div className="tea-video">
          <video className="video" autoPlay muted loop>
            <source src={video_url} />
          </video>
        </div>
        <div className="tea-info">
          <span className="tea-name">{name}</span>
          <div className="description">{description}</div>
        </div>
      </li>
    );
  }
}

export default Slide;
