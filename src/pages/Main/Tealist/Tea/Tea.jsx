import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tea.scss';

class Tea extends Component {
  render() {
    const { name, price, main_img_url, hover_img_url, view_count } =
      this.props.product;
    const PRICE_INTEGER = Math.floor(price);
    return (
      <li className="product-tea">
        <Link className="tea-img-container">
          <img src={main_img_url} alt="Tea" className="tea-img-before" />
          <img src={hover_img_url} alt="Tea" className="tea-img-after" />
          <button className="cart">
            <i class="fas fa-shopping-cart" />
          </button>
        </Link>
        <p className="name">
          <Link to="" className="name-link">
            {name}
          </Link>
        </p>
        <div className="price">
          <strong>{PRICE_INTEGER}</strong>원
        </div>
        <div className="count-container">
          <span className="view-icon">
            <i class="far fa-eye" />
          </span>
          <span className="count">{view_count}</span>
        </div>
      </li>
    );
  }
}

export default Tea;
