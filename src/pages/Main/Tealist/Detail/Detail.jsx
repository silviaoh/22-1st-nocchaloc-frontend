import React from 'react';
import { Link } from 'react-router-dom';
import Sharebutton from './Sharebutton/Sharebutton';
import Selectlist from './Selectlist/Selectlist';
import './Detail.scss';

class Detail extends React.Component {
  render() {
    return (
      <div className="detail-wrapper">
        <section className="item-thumbnail-wrapper">
          <div className="item-thumbnail">
            <img
              src="https://www.osulloc.com/upload/kr/ko/adminImage/PW/US/20180406140800938CQ.png?quality=80"
              alt="Tea"
              className="thumbnail"
            />
          </div>
          <div className="benefit">
            <span className="icon">
              <i class="fas fa-shopping-bag"></i>
            </span>
            <p className="content">쇼핑백동봉</p>
          </div>
        </section>
        <section className="item-info">
          <div className="item-info-top">
            <section className="location">
              <span className="root">Tea Shop</span>
              <span className="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
              <Link className="category">세트</Link>
            </section>
            <h1 className="product-title">프리미엄 말차</h1>
            <p className="description">
              즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한
              블렌디드 티 선물세트입니다.
            </p>
            <section className="share-price">
              <Sharebutton />
              <p className="price">
                <strong className="bold">20,000</strong>원
              </p>
            </section>
          </div>
          <section className="item-info-middle">
            <section className="selected-item">
              <div className="product-amount">
                <span className="item-name">구매수량</span>
                <span className="modify-amount">
                  <button className="decrease">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span className="count">1</span>
                  <button className="increase">
                    <i class="fas fa-plus"></i>
                  </button>
                </span>
              </div>

              <Selectlist />
            </section>
          </section>
          <section className="item-info-bottom">
            <div className="value-amount">
              <span className="product-total">상품금액 합계</span>
              <p className="value">
                <strong className="bold">20,000</strong>원
              </p>
            </div>
            <button className="cart-btn">장바구니</button>
          </section>
        </section>
      </div>
    );
  }
}

export default Detail;
