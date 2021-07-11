import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import Tea from './Tea/Tea';
import PRODUCTS_INFO from '../../../data/mockData';
import './Tealist.scss';

class TeaList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: PRODUCTS_INFO });
    // fetch('http://10.58.7.49:8000/products/product')
    //   .then(response => response.json())
    //   .then(data => this.setState({ products: data.products_info }));
  }

  render() {
    console.log(PRODUCTS_INFO);
    const totalProductsCount = this.state.products.length;
    return (
      <div className="tealist">
        {/*video slider*/}
        <div className="tea-carousel">
          <div className="swiper-container">
            <ul className="swiper">
              <Slide />
            </ul>
            <div className="lightblackbox">
              <button className="left">
                <i className="fas fa-chevron-left" />
              </button>
            </div>
            <div className="blackbox">
              <button className="right">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="swiper-teaname">
            <div className="teaname-overflow">
              {CATEGORY.map(menu => (
                <Link to="#" className="teaname" key={menu.id}>
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <main className="main-container">
          {/*aside menu*/}
          <aside className="aside-menu">
            <h1 className="title">TEA SHOP</h1>
            <h2 className="list-in-title">TEA</h2>
            <ul className="aside-menu-container">
              {CATEGORY.map(menu => (
                <li className="menu-name" key={menu.id}>
                  <Link to="#" className="name-item">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          {/*list*/}
          <section className="teashop">
            <header className="teashop-header">
              <h1 className="title">Tea shop</h1>
              <div className="header-sort">
                <button className="new active">신상품순</button>
                <button className="descending">높은 가격순</button>
                <button className="ascending">낮은 가격순</button>
              </div>
            </header>
            <section className="teashop-filter">
              <span className="total">
                총 <strong className="bold">{totalProductsCount}</strong>개의
                상품이 있습니다.
              </span>
              <div className="filter-button">
                <button className="active">전체</button>
                <button>잎차</button>
                <button>피라미드</button>
                <button>티백</button>
                <button>파우더</button>
              </div>
            </section>
            <section className="teashop-list">
              <ul className="list-tea">
                {/* <Tea /> */}
                {this.state.products.map(product => (
                  <Tea key={product.id} product={product} />
                ))}
              </ul>
            </section>
            <section className="pagination">
              <div className="pagination-in">
                <div className="lefts">
                  <button className="btn-home">
                    <i className="fas fa-angle-double-left" />
                  </button>
                  <button className="btn-left">
                    <i className="fas fa-chevron-left" />
                  </button>
                </div>
                <div className="nums">
                  <Link to="#" className="num active">
                    1
                  </Link>
                  <Link to="#" className="num">
                    2
                  </Link>
                  <Link to="#" className="num">
                    3
                  </Link>
                  <Link to="#" className="num">
                    4
                  </Link>
                  <Link to="#" className="num">
                    5
                  </Link>
                </div>
                <div className="rights">
                  <button className="btn-right">
                    <i className="fas fa-chevron-right" />
                  </button>
                  <button className="btn-end">
                    <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </section>
          </section>
          <Link to="#" className="top">
            <i className="fas fa-arrow-up" />
          </Link>
        </main>
      </div>
    );
  }
}

const CATEGORY = [
  { id: 1, name: '명차' },
  { id: 2, name: '녹차/발효차/홍차' },
  { id: 3, name: '허브티(무카페인)' },
  { id: 4, name: '블렌디드티' },
  { id: 5, name: '웰니스티' },
  { id: 6, name: '파우더' },
  { id: 7, name: '세트' },
];

export default TeaList;
