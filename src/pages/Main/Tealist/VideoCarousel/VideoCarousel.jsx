import React from 'react';
import Slide from '../Slide/Slide';

class VideoCarousel extends React.Component {
  render() {
    return (
      <div className="swiper-container">
        <ul className="swiper">
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </ul>
      </div>
    );
  }
}

export default VideoCarousel;
