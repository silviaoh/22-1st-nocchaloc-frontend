import React from 'react';
import { Link } from 'react-router-dom';
import Sharebutton from './Sharebutton/Sharebutton';
import Selectlist from './Selectlist/Selectlist';
import { GET_PRODUCT_API } from '../../../../config.js';
import './Detail.scss';

class Detail extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    fetch(`${GET_PRODUCT_API}/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ product: data.product_info[0] }));
  }

  render() {
    const { description, main_image_url, name, price } = this.state.product;
    return (
      <div className="detail-wrapper" onLoad={this.addViewCount}>
        <section className="item-thumbnail-wrapper">
          <div className="item-thumbnail">
            <img alt="Tea" src={main_image_url} className="thumbnail" />
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
            <h1 className="product-title">{name}</h1>
            <p className="description">{description}</p>
            <section className="share-price">
              <Sharebutton />
              <p className="price">
                <strong className="bold">
                  {Math.ceil(price).toLocaleString()}
                </strong>
                원
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
