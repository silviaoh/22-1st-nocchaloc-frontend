import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <div className="product-info">
        <img alt="product_img" className="img-origin" src={this.props.img} />
        <img alt="mainslide_img" className="img-hover" src={this.props.hover} />
        <h2>{this.props.name}</h2>
        <h2>{this.props.price}원</h2>
      </div>
    );
  }
}

export default withRouter(Product);
