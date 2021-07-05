import React from 'react';
import { Link } from 'react-router-dom';
import VideoCarousel from './VideoCarousel/VideoCarousel';

class Tealist extends React.Component {
  swiperTeaName = [
    { id: 1, name: '명차' },
    { id: 2, name: '녹차/발효차/홍차' },
    { id: 3, name: '허브티(무카페인)' },
    { id: 4, name: '블렌디드티' },
    { id: 5, name: '웰니스티' },
    { id: 6, name: '파우더' },
    { id: 7, name: '세트' },
  ];

  render() {
    return (
      <div className="wrapper">
        {/*video slider*/}
        <div className="tea-carousel">
          <VideoCarousel />
          <div className="swiper-teaname">
            {this.swiperTeaName.map(menu => {
              return (
                <Link className="teaname" key={menu.id}>
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </div>
        <main className="main-container">
          {/*aside menu*/}
          <aside className="aside-menu">
            <h1 className="title">TEA SHOP</h1>
            <ul>
              <li className="list-in-title">TEA</li>
              {this.swiperTeaName.map(menu => {
                return (
                  <li className="menu-name" key={menu.id}>
                    <Link to="#">{menu.name}</Link>
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
                <button className="new">신상품순</button>
                <button className="descending">높은 가격순</button>
                <button className="ascending">낮은 가격순</button>
              </div>
            </header>
            <section className="teashop-filter">
              <span className="total">총 0개의 상품이 있습니다.</span>
              <div className="filter-button">
                <button className="all">전체</button>
                <button className="leaf-tea">잎차</button>
                <button className="pyramid">피라미드</button>
                <button className="teabag">티백</button>
                <button className="powder">파우더</button>
              </div>
            </section>
            <section className="teashop-list">{/*Tea 컴포넌트*/}</section>
          </section>
        </main>
      </div>
    );
  }
}

export default Tealist;
