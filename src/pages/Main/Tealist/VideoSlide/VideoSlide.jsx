import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import './VideoSlide.scss';

class VideoSlide extends React.Component {
  constructor() {
    super();
    this.state = {
      videoButtonId: 1,
      videoCount: 0,
    };
    this.swiperInner = React.createRef();
  }

  goToLeft = () => {
    this.state.videoButtonId > 1 &&
      this.setState(
        prev => ({ videoButtonId: prev.videoButtonId - 1 }),
        () => {
          this.swiperInner.current.style.transform = `translate3d(${
            25 - 50 * (this.state.videoButtonId - 1)
          }vw, 0, 0)`;
        }
      );
  };

  goToRight = () => {
    this.setState(
      prev => ({ videoButtonId: prev.videoButtonId + 1 }),
      () => {
        this.swiperInner.current.style.transform = `translate3d(${
          25 - 50 * (this.state.videoButtonId - 1)
        }vw, 0, 0)`;
      }
    );
  };

  clickTeaName = id => {
    this.setState({ videoButtonId: id }, () => {
      this.swiperInner.current.style.transform = `translate3d(${
        25 - 50 * (this.state.videoButtonId - 1)
      }vw, 0, 0)`;
    });
    console.log(25 - 50 * (this.state.videoButtonId - 1));
  };

  render() {
    const { products, video, CATEGORY } = this.props;

    return (
      <div className="tea-carousel">
        <div className="swiper-container">
          <div className="swiper">
            <ul className="swiper-inner" ref={this.swiperInner}>
              {video.map(video => (
                <Slide key={video.id} video={video} />
              ))}
            </ul>
            <div className="transparentbox left-0">
              <button className="left" onClick={this.goToLeft}>
                <i className="fas fa-chevron-left" />
              </button>
            </div>
            <div className="transparentbox right-0">
              <button className="right" onClick={this.goToRight}>
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="swiper-teaname">
          <div className="teaname-overflow">
            {CATEGORY.map((category, idx) => (
              <button
                className={`teaname ${
                  (this.state.videoButtonId === category.id && 'active') ||
                  (this.state.videoButtonId === 0 && idx === 0 && 'active')
                }`}
                key={category.id}
                onClick={() => this.clickTeaName(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoSlide;
