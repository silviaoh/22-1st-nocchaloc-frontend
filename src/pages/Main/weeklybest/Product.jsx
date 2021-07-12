import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  // state = {
  //   img: 'https://source.unsplash.com/248x248/?tea',
  // };

  render() {
    return (
      <div className="product-info">
        <img
          alt="product_img"
          clasName="img-origin"
          src={this.props.img}
          // onMouseEnter={() => {
          //   this.setState({
          //     img: 'https://source.unsplash.com/248x248/?tealeaf',
          //   });
          // }}
          // onMouseOut={() => {
          //   this.setState({
          //     img: 'https://source.unsplash.com/248x248/?tea',
          //   });
          // }}
        />
        {/* <img
          alt="mainslide_img"
          className="img-hover"
          src="images/Main/tea.jpg"
        /> */}
        <h2>{this.props.title}</h2>
        <h2>{this.props.price}</h2>
      </div>
    );
  }
}

export default Product;
