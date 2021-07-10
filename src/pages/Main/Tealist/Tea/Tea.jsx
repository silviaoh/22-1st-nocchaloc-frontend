import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListLayout from '../ListLayout/ListLayout';
import './Tea.scss';

class Tea extends Component {
  render() {
    const { name } = this.props.product;
    // name, price, main_img_url, hover_img_url, view_count
    // const PRICE_INTEGER = Math.floor(price);
    return (
      <li className="product-tea">
        <Link className="tea-img-container">
          <img src="" alt="Tea" className="tea-img-before" />
          <img src="" alt="Tea" className="tea-img-after" />
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
          <strong>20000</strong>원
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
