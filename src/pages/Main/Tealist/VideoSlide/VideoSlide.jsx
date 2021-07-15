import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import { GET_VIDEO_JSON } from '../../../../config.js';
import './VideoSlide.scss';

class VideoSlide extends React.Component {
  swiperInner = React.createRef();
  swiperTeaName = React.createRef();

  state = {
    videos: [],
    videoButtonId: 1,
    videoCount: 0,
    pressed: false,
    originalX: 0,
    translateX: 0,
    lastTranslatX: 0,
  };

  componentDidMount() {
    fetch(`${GET_VIDEO_JSON}`)
      .then(res => res.json())
      .then(data => this.setState({ videos: data }));
  }

  handleMouseDown = e => {
    this.setState({
      pressed: true,
      originalX: e.clientX,
    });
  };

  handleMouseMove = e => {
    if (!this.state.pressed) return;
    e.preventDefault();
    this.setState({
      translateX: e.clientX - this.state.originalX + this.state.lastTranslatX,
    });

    if (this.state.translateX > 0) {
      this.swiperTeaName.current.style.transform = `translate3d(calc(25%),0px,0px)`;
    } else if (this.state.translateX < -2000) {
      this.swiperTeaName.current.style.transform = `translate3d(${
        -14.9 * 8
      }vw, 0, 0)`;
    } else {
      this.swiperTeaName.current.style.transform = `translate3d(calc(25% + ${this.state.translateX}px),0px,0px)`;
    }
  };

  handleMouseUp = e => {
    this.setState({
      pressed: false,
      lastTranslatX: this.state.translateX,
    });
  };

  goToLeft = () => {
    this.state.videoButtonId > 1 &&
      this.setState(
        prev => ({ videoButtonId: prev.videoButtonId - 1 }),
        () => {
          this.swiperInner.current.style.transform = `translate3d(${
            25 - 50 * (this.state.videoButtonId - 1)
          }vw, 0, 0)`;
          if (this.state.videoButtonId < 4) {
            this.swiperTeaName.current.style.transform = `translate3d(${
              -10 * (this.state.videoButtonId - 1)
            }vw, 0, 0)`;
          }
        }
      );
  };

  goToRight = () => {
    this.state.videoButtonId < 7 &&
      this.setState(
        prev => ({ videoButtonId: prev.videoButtonId + 1 }),
        () => {
          this.swiperInner.current.style.transform = `translate3d(${
            25 - 50 * (this.state.videoButtonId - 1)
          }vw, 0, 0)`;
          if (this.state.videoButtonId > 3) {
            this.swiperTeaName.current.style.transform = `translate3d(${
              -14.9 * (this.state.videoButtonId - 1)
            }vw, 0, 0)`;
          }
        }
      );
  };

  clickTeaName = id => {
    this.setState({ videoButtonId: id }, () => {
      this.swiperInner.current.style.transform = `translate3d(${
        25 - 50 * (this.state.videoButtonId - 1)
      }vw, 0, 0)`;
    });
  };

  render() {
    const { products, CATEGORY } = this.props;
    console.log(products);

    return (
      <div className="tea-carousel">
        <div className="swiper-container">
          <div className="swiper">
            <ul className="swiper-inner" ref={this.swiperInner}>
              {products.video &&
                products.video.map((video, idx) => (
                  <Slide key={idx} video={video} />
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
        <div
          className="swiper-teaname"
          pressed={this.state.pressed}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
        >
          <div className="teaname-overflow" ref={this.swiperTeaName}>
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
