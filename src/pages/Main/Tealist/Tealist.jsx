import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import ListLayout from './ListLayout/ListLayout';
import './Tealist.scss';

class TeaList extends React.Component {
  state = {
    products: [],
  };

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getData();
    // fetch('http://10.58.7.49:8000/products/product')
    //   .then(response => response.json())
    //   .then(data => this.setState({ products: data.products_info }));
  }

  render() {
    const totalProductsCount = this.state.products.length;
    return (
      this.state.products && (
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
            <ListLayout
              totalProductsCount={totalProductsCount}
              products={this.state.products}
            />
            <Link to="#" className="top">
              <i className="fas fa-arrow-up" />
            </Link>
          </main>
        </div>
      )
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
