import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import Tea from './Tea/Tea';
import './Tealist.scss';

class TeaList extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {/*video slider*/}
        <div className="tea-carousel">
          <div className="swiper-container">
            <ul className="swiper">
              <Slide />
              <Slide />
              <Slide />
              <Slide />
              <Slide />
              <Slide />
              <Slide />
            </ul>
            <div className="lightblackbox">
              <button className="left">
                <i class="fas fa-chevron-left"></i>
              </button>
            </div>
            <div className="blackbox">
              <button className="right">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="swiper-teaname">
            <div className="teaname-overflow">
              {this.CATEGORY.map(menu => {
                return (
                  <Link className="teaname" key={menu.id}>
                    {menu.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <main className="main-container">
          {/*aside menu*/}
          <aside className="aside-menu">
            <h1 className="title">TEA SHOP</h1>
            <h2 className="list-in-title">TEA</h2>
            <ul className="aside-menu-container">
              {this.swiperTeaName.map(menu => {
                return (
                  <li className="menu-name" key={menu.id}>
                    <Link to="#" className="name-item">
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
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
                총 <strong id="sum">0</strong>개의 상품이 있습니다.
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
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
              </ul>
            </section>
            <section className="pagination">
              <div className="pagination-in">
                <div className="lefts">
                  <button className="btn-home">
                    <i class="fas fa-angle-double-left"></i>
                  </button>
                  <button className="btn-left">
                    <i class="fas fa-chevron-left"></i>
                  </button>
                </div>
                <div className="nums">
                  <Link className="num active">1</Link>
                  <Link className="num">2</Link>
                  <Link className="num">3</Link>
                  <Link className="num">4</Link>
                  <Link className="num">5</Link>
                </div>
                <div className="rights">
                  <button className="btn-right">
                    <i class="fas fa-chevron-right"></i>
                  </button>
                  <button className="btn-end">
                    <i class="fas fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
            </section>
          </section>
          <Link className="top">
            <i class="fas fa-arrow-up"></i>
          </Link>
        </main>
      </div>
    );
  }
}

CATEGORY = [
  { id: 1, name: '명차' },
  { id: 2, name: '녹차/발효차/홍차' },
  { id: 3, name: '허브티(무카페인)' },
  { id: 4, name: '블렌디드티' },
  { id: 5, name: '웰니스티' },
  { id: 6, name: '파우더' },
  { id: 7, name: '세트' },
];

export default TeaList;
