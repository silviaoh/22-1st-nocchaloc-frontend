import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common.scss';
import './MainPageLayout.scss';
import Product from './weeklybest/Product';

class MainPageLayout extends React.Component {
  state = {
    Products: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/weeklyBest.json', {
      method: 'GET',
    })
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
                  <img src="/images/Main/tea.jpg" alt="tea"></img>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <section className="main-weeklybest">
          <div className="main-inner">
            <h1 className="title-weekly">이번 주 인기 상품</h1>
            <div className="slide-weeklybest">
              {this.state.Products.map(products => (
                <Product
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
