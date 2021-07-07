import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <>
        <div className="product-info">
          <img src={this.props.img} alt="" />
          <h2>{this.props.title}</h2>
          <h2>{this.props.price}</h2>
        </div>
      </>
    );
  }
}

export default Product;
