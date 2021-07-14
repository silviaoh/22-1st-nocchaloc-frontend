import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <div className="product-info">
        <img alt="product_img" className="img-origin" src={this.props.img} />
        <img
          alt="mainslide_img"
          className="img-hover"
          src="/images/Main/leaf.jpg"
          // src={this.props.img}
        />
        <h2>{this.props.title}</h2>
        <h2>{this.props.price}</h2>
      </div>
    );
  }
}

export default Product;

// if(products.length > 0) {
//   return (
//     products.map(product=> (
//       (product.id > 1) ? (
//         <div key = {this.product.id}>
//           <img src={this.product.img} alt="img"/>
//           <h2>{this.props.title}</h2>
//           <h2>{this.props.price}</h2>
//         </div>
//         : null
//     ))
//   );
// } else {
//   return (
//     <div>
//     반복
//     </div>
//   )
// }
