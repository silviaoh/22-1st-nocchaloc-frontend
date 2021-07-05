import React from 'react';
import './Slide.scss';

class Slide extends React.Component {
  render() {
    return (
      <li className="slide">
        <div className="tea-video">
          <video className="video" autoplay="autoplay" muted>
            <source src="video/China.mp4" />
          </video>
        </div>
        <div className="tea-info">
          <span className="tea-name">명차</span>
          <div className="description">우려내기 좋아요</div>
        </div>
      </li>
    );
  }
}

export default Slide;
