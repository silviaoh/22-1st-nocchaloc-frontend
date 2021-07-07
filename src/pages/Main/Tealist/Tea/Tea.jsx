import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tea.scss';

class Tea extends Component {
  render() {
    return (
      <li className="product-tea">
        <Link className="tea-img-container">
          <img
            src="https://via.placeholder.com/260x300"
            alt="Tea"
            className="tea-img-before"
          />
          <img
            src="images/List/sample.jpeg"
            alt="Tea"
            className="tea-img-after"
          />
          <Link className="cart">
            <i class="fas fa-shopping-cart"></i>
          </Link>
        </Link>
        <p className="name">
          <Link href="" className="name-link">
            녹차밀크스프레드
          </Link>
        </p>
        <div className="price">
          <strong>8,500</strong>원
        </div>
        <div className="count-container">
          <span className="view-icon">
            <i class="far fa-eye"></i>
          </span>
          <span className="count">14</span>
        </div>
      </li>
    );
  }
}

export default Tea;
