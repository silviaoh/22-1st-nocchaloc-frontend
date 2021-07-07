import React, { Component } from 'react';
import './Benefit.scss';

class Benefit extends Component {
  render() {
    return (
      <ul className="benefits-wrapper">
        <li className="benefit">
          <span className="icon">
            <i class="fas fa-shopping-bag"></i>
            {/*<i class="fas fa-gift"></i> */}
          </span>
          <p className="content">쇼핑백동봉{/*(유료)포장가능 */}</p>
        </li>
        <li className="benefit">
          <span className="icon">
            <i class="fas fa-gift"></i>
          </span>
          <p className="content">(유료)포장가능</p>
        </li>
      </ul>
    );
  }
}

export default Benefit;
