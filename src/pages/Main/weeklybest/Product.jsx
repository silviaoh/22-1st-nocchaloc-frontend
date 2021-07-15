import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="product-info"
        // onClick={() => this.props.history.push(`/product/detail/${this.props.id}`}
      >
        <img alt="product_img" className="img-origin" src={this.props.img} />
        <img
          alt="mainslide_img"
          className="img-hover"
          src="/images/Main/leaf.jpg"
          // src={this.props.hover}
        />
        <h2>{this.props.title}</h2>
        <h2>{this.props.price}원</h2>
      </div>
    );
  }
}

export default withRouter(Product);
