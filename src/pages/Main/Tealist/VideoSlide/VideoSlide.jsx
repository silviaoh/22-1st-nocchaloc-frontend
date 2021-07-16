import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import { VIDEO_JSON } from '../../../../config.js';
import './VideoSlide.scss';

class VideoSlide extends React.Component {
  state = {
    videos: [],
    videoButtonId: 1,
    videoCount: 0,
    pressed: false,
    originalX: 0,
    translateX: 0,
    lastTranslateX: 0,
    teaNameStr: '',
    innerStr: '',
  };

  componentDidMount() {
    fetch(`${VIDEO_JSON}`)
      .then(res => res.json())
      .then(data => this.setState({ videos: data }));
  }

  handleMouseDown = e => {
    this.setState({
      pressed: true,
      originalX: e.clientX,
    });
    console.log(e);
  };

  handleMouseMove = e => {
    if (!this.state.pressed) return;
    e.preventDefault();
    this.setState({
      translateX: e.clientX - this.state.originalX + this.state.lastTranslateX,
    });

    if (this.state.translateX > 0) {
      this.setState({ teaNameStr: `translate3d(25vw,0px,0px)` });
    } else if (this.state.translateX < -2000) {
      this.setState({ teaNameStr: `translate3d(${-14.9 * 8}vw, 0, 0)` });
    } else {
      this.setState({
        teaNameStr: `translate3d(${this.state.translateX}px,0px,0px)`,
      });
    }
  };

  handleMouseUp = e => {
    this.setState({
      pressed: false,
      lastTranslatX: this.state.translateX,
    });
  };

  goToLeft = () => {
    if (this.state.videoButtonId > 1) {
      this.setState(
        prev => ({ videoButtonId: prev.videoButtonId - 1 }),
        () => {
          this.setState({
            innerStr: `translate3d(${
              25 - 50 * (this.state.videoButtonId - 1)
            }vw, 0, 0)`,
          });
          if (this.state.videoButtonId < 4) {
            this.setState({
              teaNameStr: `translate3d(${
                -10 * (this.state.videoButtonId - 1)
              }vw, 0, 0)`,
            });
          }
        }
      );
    }
  };

  goToRight = () => {
    if (this.state.videoButtonId < this.state.videos.length) {
      this.setState(
        prev => ({ videoButtonId: prev.videoButtonId + 1 }),
        () => {
          this.setState({
            innerStr: `translate3d(${
              25 - 50 * (this.state.videoButtonId - 1)
            }vw, 0, 0)`,
          });
          if (this.state.videoButtonId > 3) {
            this.setState({
              teaNameStr: `translate3d(${
                -14.9 * (this.state.videoButtonId - 1)
              }vw, 0, 0)`,
            });
          }
        }
      );
    }
  };

  clickTeaName = id => {
    this.setState({ videoButtonId: id }, () => {
      this.setState({
        innerStr: `translate3d(${
          25 - 50 * (this.state.videoButtonId - 1)
        }vw, 0, 0)`,
      });
    });
  };

  render() {
    const { products, CATEGORY } = this.props;
    const swiperTeaNameStyle = {
      transform: this.state.teaNameStr,
    };
    const swiperInnerStyle = {
      transform: this.state.innerStr,
    };

    return (
      <div className="tea-carousel">
        <div className="swiper-container">
          <div className="swiper">
            <ul className="swiper-inner" style={swiperInnerStyle}>
              {products.video?.map((video, idx) => (
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
          <div className="teaname-overflow" style={swiperTeaNameStyle}>
            {CATEGORY.map((category, idx) => (
              <button
                className={`teaname ${
                  (this.state.videoButtonId === category.id ||
                    (this.state.videoButtonId === 0 && idx === 0)) &&
                  'active'
                }`}
                key={category.id}
                style={{}}
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
