import React from 'react';
import { Link } from 'react-router-dom';
import MainSlide from './MainSlide';
import Product from './weeklybest/Product';
import MAIN_SLIDE from './mainSlideData';
import './MainPage.scss';

class MainPage extends React.Component {
  state = {
    slide: [],
    Products: [],
    bestIndex: 0,
    slideIndex: 0,
  };

  prevSlide = () => {
    if (this.state.slideIndex > 0) {
      this.setState({
        slideIndex: this.state.slideIndex - 1,
      });
    } else {
      this.setState({ slideIndex: 3 });
    }
  };

  nextSlide = () => {
    if (this.state.slideIndex < 3) {
      this.setState({
        slideIndex: this.state.slideIndex + 1,
      });
    } else {
      this.setState({ slideIndex: 0 });
    }
  };

  prevButton = () => {
    if (this.state.bestIndex === 0) return;
    this.setState({
      bestIndex: this.state.bestIndex - 1,
    });
  };

  nextButton = () => {
    if (this.state.bestIndex === 1) return;
    this.setState({
      bestIndex: this.state.bestIndex + 1,
    });
  };
  componentDidMount() {
    fetch('http://localhost:3000/data/weeklyBest.json')
      // fetch('http://10.58.6.95:8000/products')
      // fetch(`${GET_BESTLIST_API}/products`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          slide: data.slide,
          Products: data.products,
          // Products: data.products_info,
        });
      });
  }

  render() {
    return (
      <>
        <div className="item-inner">
          <div className="inner">
            <div className="box-wrap">
              <div
                className="descbox"
                style={{
                  transform: `translateX(-${100 * this.state.slideIndex}vw)`,
                  transition: 'transform ease-out 0.5s',
                }}
              >
                {MAIN_SLIDE.map((slide, idx) => (
                  <MainSlide
                    key={idx}
                    title={slide.title}
                    img={slide.img}
                    date={slide.date}
                    onepoint={slide.onepoint}
                  />
                ))}
              </div>
            </div>
            <div className="left-btn">
              <Link to="/">바로보기</Link>
            </div>
            <div className="slide-btn-wrapper">
              <i
                className="fas fa-2x fa-chevron-left"
                onClick={this.prevSlide}
              ></i>
              <i
                className="fas fa-2x fa-chevron-right"
                onClick={this.nextSlide}
              ></i>
            </div>
          </div>
        </div>

        <section className="main-weeklybest">
          <div className="btn-wrapper">
            <i
              className="fas fa-3x fa-chevron-left"
              onClick={this.prevButton}
            ></i>
            <i
              className="fas fa-3x fa-chevron-right"
              onClick={this.nextButton}
            ></i>
          </div>
          <div className="weekly-inner">
            <h1 className="title-weekly">이번 주 인기 상품</h1>
            <div
              className="slide-weeklybest"
              style={{
                transform: `translateX(-${1400 * this.state.bestIndex}px)`,
                transition: 'transform ease-out 0.5s',
              }}
            >
              {this.state.Products.map((products, id) => (
                <Product
                  key={id}
                  title={products.title}
                  img={products.img}
                  // img={products.main_image_url}
                  //img={prodcuts.main_}
                  price={Math.floor(products.price)}
                />
              ))}
            </div>

            <div className="btn-box">
              <div className="weeklybest-btn">
                <Link to="/">바로가기</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="main-sns">
          <div className="sns-inner">
            <div className="sns-box-wrap">
              <div className="sns-descbox">
                <h3 className="sns-promo-title">
                  #녹차록 #NOCCHALOC
                  <br />
                </h3>
                <p className="sns-promo-onepoint">
                  녹차록 공식 인스타그램을 통해 다양한 소식을 전해드립니다.
                </p>
                <div className="sns-left-btn">
                  <Link to="/">녹차록 인스타그램</Link>
                </div>
                <figure className="sns-img-slidebox">
                  <img src="/images/Main/tea.jpg" alt="tea"></img>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MainPage;
