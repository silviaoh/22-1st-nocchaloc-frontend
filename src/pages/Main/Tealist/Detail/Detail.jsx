import React from 'react';
import { Link } from 'react-router-dom';
import Benefit from './Benefit/Benefit';
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
          <Benefit />
        </section>
        <section className="item-info">
          <div className="item-info-top">
            <section className="location">
              <span className="root">Tea Shop</span>
              <span className="icon"></span>
              <Link className="category">세트</Link>
            </section>
            <p className="description">
              즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한
              블렌디드 티 선물세트입니다.
            </p>
            <section className="share-price">
              <div className="sns">{/*<ShareButton /> */}</div>
              <p className="price">
                <strong className="bold">20,000</strong>원
              </p>
            </section>
          </div>
          <section className="item-info-middle">
            {/*<Selectlist /> */}
            <section className="selected-item">
              <p className="item-name">
                구매수량
                <span className="modify-amount">
                  <button className="decrease">-</button>
                  <span className="count">1</span>
                  <button className="increase">+</button>
                </span>
              </p>
              {/*<Selectlist /> */}
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
