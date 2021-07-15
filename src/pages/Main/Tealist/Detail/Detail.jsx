import React from 'react';
import { Link } from 'react-router-dom';
import Sharebutton from './Sharebutton/Sharebutton';
import Selectlist from './Selectlist/Selectlist';
import './Detail.scss';

class Detail extends React.Component {
  state = {
    product: [],
    count: 0,
    bagPrice: 0,
  };

  componentDidMount() {
    window.Kakao.init(process.env.REACT_APP_KAKAOSHARE_API);

    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '프리미엄 말차',
        description:
          '즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한 블렌디드 티 선물세트입니다.',
        imageUrl:
          'https://www.osulloc.com/upload/kr/ko/adminImage/PW/US/20180406140800938CQ.png?quality=80',
        link: {
          webUrl: 'http://localhost:3000/detail',
        },
      },
      buttons: [
        {
          title: '녹차록에서 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:3000/detail',
            webUrl: 'http://localhost:3000/detail',
          },
        },
      ],
    });
  }

  includeBagPrice = id => {
    id === 1
      ? this.setState({ bagPrice: 100 })
      : this.setState({ bagPrice: 0 });
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { description, main_image_url, name, price } = this.state.product;
    return (
      <div className="detail-wrapper" onLoad={this.addViewCount}>
        <section className="item-thumbnail-wrapper">
          <div className="item-thumbnail">
            <img
              src="https://github.com/JeonSoohyun27/nocchaloc_product_image_data/blob/main/tea/tea-43.png?raw=true"
              alt="Tea"
              className="thumbnail"
            />
          </div>
          <div className="benefit">
            <span className="icon">
              <i className="fas fa-shopping-bag" />
            </span>
            <p className="content">쇼핑백동봉선택가능</p>
          </div>
        </section>
        <section className="item-info">
          <div className="item-info-top">
            <section className="location">
              <span className="root">Tea Shop</span>
              <span className="icon">
                <i className="fas fa-chevron-right" />
              </span>
              <Link className="category">세트</Link>
            </section>
            <h1 className="product-title">{name}</h1>
            <p className="description">{description}</p>
            <section className="share-price">
              <Sharebutton location={this.props.location} />
              <p className="price">
                <strong className="bold">
                  {Math.ceil(price).toLocaleString()}
                </strong>
                원
              </p>
            </section>
          </div>
          <section className="item-info-middle">
            <section className="selected-item">
              <div className="product-amount">
                <span className="item-name">구매수량</span>
                <span className="modify-amount">
                  <button className="decrease" onClick={this.handleDecrease}>
                    <i className="fas fa-minus" />
                  </button>
                  <span className="count">{this.state.count}</span>
                  <button className="increase" onClick={this.handleIncrease}>
                    <i className="fas fa-plus" />
                  </button>
                </span>
              </div>
              <Selectlist includeBagPrice={this.includeBagPrice} />
            </section>
          </section>
          <section className="item-info-bottom">
            <div className="value-amount">
              <span className="product-total">상품금액 합계</span>
              <p className="value">
                <strong className="bold">
                  {(
                    20000 * this.state.count +
                    this.state.bagPrice
                  ).toLocaleString()}
                </strong>
                원
              </p>
            </div>
            <button className="cart-btn">장바구니</button>
          </section>
        </section>
      </div>
    );
  }
}

export default Detail;
