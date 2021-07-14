import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tea.scss';

class Tea extends Component {
  render() {
    const { pk, name, price, main_image_url, hover_image_url, view_count } =
      this.props.product;
    const PRICE_INTEGER = Math.floor(price);
    return (
      <li className="product-tea">
        <Link to={`detail/${pk}`} className="tea-img-container">
          <img src={main_image_url} alt="Tea" className="tea-img-before" />
          <img src={hover_image_url} alt="Tea" className="tea-img-after" />
          <button className="cart">
            <i class="fas fa-shopping-cart" />
          </button>
        </Link>
        <p className="name">
          <Link to="" className="name-link">
            이름
          </Link>
        </p>
        <div className="price">
          <strong>{PRICE_INTEGER.toLocaleString()}</strong>원
        </div>
        <div className="count-container">
          <span className="view-icon">
            <i class="far fa-eye" />
          </span>
          <span className="count">0</span>
        </div>
      </li>
    );
  }
}

export default Tea;
