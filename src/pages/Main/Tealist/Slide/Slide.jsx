import React, { useRef } from 'react';
import './Slide.scss';

class Slide extends React.Component {
  render() {
    const { src, innerli } = this.props;
    return (
      <li className="slide" ref={innerli}>
        <div className="tea-video">
          <video className="video" autoPlay muted loop>
            <source src={src} />
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
