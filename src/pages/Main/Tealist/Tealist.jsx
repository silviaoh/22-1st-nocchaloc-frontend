import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';

class Tealist extends React.Component {
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
          </div>
          <div className="swiper-teaname">
            <Link className="teaname">명차</Link>
            <Link className="">녹차/발효차/홍차</Link>
            <Link className="">허브티(무카페인)</Link>
            <Link className="">블렌디드티</Link>
            <Link className="">웰니스티</Link>
            <Link className="">파우더</Link>
            <Link className="">세트</Link>
          </div>
        </div>
        <main className="main-container">
          {/*aside menu*/}
          <aside className="aside-menu">
            <h1 className="title">TEA SHOP</h1>
            <ul>
              <li className="list-in-title">TEA</li>
              <li className="menu-name">
                <Link to="#">명차</Link>
              </li>
              <li className="menu-name">
                <Link to="#">녹차/발효차/홍차</Link>
              </li>
              <li className="menu-name">
                <Link to="#">허브티(무카페인)</Link>
              </li>
              <li className="menu-name">
                <Link to="#">블렌디드티</Link>
              </li>
              <li className="menu-name">
                <Link to="#">웰니스티</Link>
              </li>
              <li className="menu-name">
                <Link to="#">파우더</Link>
              </li>
              <li className="menu-name">
                <Link to="#">세트</Link>
              </li>
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
