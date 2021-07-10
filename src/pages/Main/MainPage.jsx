import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';
import Product from './weeklybest/Product';

class MainPageLayout extends React.Component {
  state = {
    Products: [],
    index: 0,
  };

  prevButton = () => {
    if (this.state.index === 0) return;
    this.setState({
      index: this.state.index - 1,
    });
  };

  nextButton = () => {
    if (this.state.index === 1) return;
    this.setState({
      index: this.state.index + 1,
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/weeklyBest.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          Products: data,
        });
      });
  }

  render() {
    return (
      <>
        <div className="item_inner">
          <div className="inner">
            <div className="box_wrap">
              <div className="descbox">
                <h3 className="promo_title">
                  텍스트가 이렇게 <br />
                  들어갑니다다다다다다다
                </h3>
                <p className="promo_date">07.01 - 07.31</p>
                <p className="promo_onepoint">텍스트가 들어갑니다다다다다</p>
                <div className="left-btn">
                  <Link to="/">바로보기</Link>
                </div>
                <figure className="img-slidebox">
                  <img alt="tea" src="/images/Main/tea.jpg" />
                </figure>
              </div>
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
          <div className="main-inner">
            <h1 className="title-weekly">이번 주 인기 상품</h1>
            <div
              className="slide-weeklybest"
              style={{
                transform: `translateX(-${1400 * this.state.index}px)`,
                transition: 'transform ease-out 0.5s',
              }}
            >
              {this.state.Products.map((products, id) => (
                <Product
                  key={id}
                  title={products.title}
                  img={products.img}
                  price={products.price}
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
          <div className="inner">
            <div className="box_wrap">
              <div className="descbox">
                <h3 className="promo_title">
                  #녹차록 #NOCCHALOC
                  <br />
                </h3>
                <p className="promo_onepoint">
                  녹차록 공식 인스타그램을 통해 다양한 소식을 전해드립니다.
                </p>
                <div className="left-btn">
                  <Link to="/">녹차록 인스타그램</Link>
                </div>
                <figure className="img-slidebox">
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

export default MainPageLayout;
