import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide';
import Tea from './Tea/Tea';
import './Tealist.scss';

class TeaList extends React.Component {
  state = {
    products: [],
    sortId: 0,
    categoryId: 0,
  };

  componentDidMount() {
    this.fetchAllProducts();
  }

  fetchAllProducts = () => {
    fetch('http://10.58.1.97:8000/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data.products_info }));
    this.props.history.push({
      pathname: '/tealist',
    });
  };

  addQuery = (key, value) => {
    let pathname = this.props.location.pathname;
    let searchParams = new URLSearchParams(this.props.location.search);
    searchParams.set(key, value);

    this.props.history.push({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  handleSortClick = id => {
    this.setState({ sortId: id }, () => {
      fetch(`http://10.58.1.97:8000/products${this.props.location.search}`)
        .then(response => response.json())
        .then(data => this.setState({ products: data.products_info }));
    });
    this.addQuery('sort', id);
  };

  handleCategoryClick = id => {
    this.setState({ categoryId: id }, () => {
      fetch(`http://10.58.1.97:8000/products${this.props.location.search}`)
        .then(response => response.json())
        .then(data => this.setState({ products: data.products_info }));
    });
    this.addQuery('category', id);
  };

  handleOverlapClick = ({ target }) => {
    const id = target.name;
    this.setState(state => ({
      [id]: !state[id],
    }));
  };

  render() {
    const { search } = this.props.location;
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
                <Link className="teaname" key={menu.id}>
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
            <button className="list-in-title" onClick={this.fetchAllProducts}>
              TEA
            </button>
            <ul className="aside-menu-container">
              {CATEGORY.map(menu => (
                <li className="menu-name" key={menu.id}>
                  <button
                    className={`name-item ${
                      search.includes(`category=${menu.id}`) ? 'active' : ''
                    }`}
                    onClick={() => this.handleCategoryClick(menu.id)}
                  >
                    {menu.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          {/*list*/}
          <section className="teashop">
            <header className="teashop-header">
              <h1 className="title">Tea shop</h1>
              <div className="header-sort">
                {SORT.map((option, idx) => {
                  return (
                    <button
                      key={option.id}
                      className={`sort ${
                        search.includes(`sort=${option.id}`) ? 'active' : ''
                      }`}
                      onClick={() => this.handleSortClick(idx + 1)}
                    >
                      {option.name}
                    </button>
                  );
                })}
              </div>
            </header>
            <section className="teashop-filter">
              <span className="total">
                총 <strong className="bold">{totalProductsCount}</strong>개의
                상품이 있습니다.
              </span>
              <div className="filter-button">
                {FILTER.map(condition => (
                  <button
                    className={`link ${
                      this.state[`filterBtn${condition.id}`] ? 'active' : ''
                    }`}
                    key={condition.id}
                    name={`filterBtn${condition.id}`}
                    onClick={this.handleOverlapClick}
                  >
                    {condition.name}
                  </button>
                ))}
              </div>
            </section>
            <section className="teashop-list">
              <ul className="list-tea">
                {this.state.products.map((product, idx) => (
                  <Tea key={idx} product={product} match={this.props.match} />
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

const FILTER = [
  { id: 0, name: '전체' },
  { id: 1, name: '잎차' },
  { id: 2, name: '피라미드' },
  { id: 3, name: '티백' },
  { id: 4, name: '파우더' },
];

const SORT = [
  { id: 1, name: '신상품순' },
  { id: 2, name: '높은 가격순' },
  { id: 3, name: '낮은 가격순' },
];

export default TeaList;
