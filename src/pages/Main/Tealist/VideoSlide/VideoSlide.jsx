import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import './VideoSlide.scss';

class VideoSlide extends React.Component {
  render() {
    const { products, video } = this.props;

    return (
      <div className="tea-carousel">
        <div className="swiper-container">
          <div className="swiper">
            <ul className="swiper-inner" ref={this.innerul}>
              {video.map(video => (
                <Slide key={video.id} video={video} />
              ))}
            </ul>
            <div className="transparentbox left-0">
              <button className="left">
                <i className="fas fa-chevron-left" />
              </button>
            </div>
            <div className="transparentbox right-0" ref={this.rightBox}>
              <button className="right">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="swiper-teaname">
          <div className="teaname-overflow">
            {products.category_info &&
              products.category_info.map(menu => (
                <Link className="teaname" key={menu.id}>
                  {menu.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoSlide;
