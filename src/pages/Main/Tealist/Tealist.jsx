import React from 'react';
import { Link } from 'react-router-dom';
import Tea from './Tea/Tea';
import VideoSlide from './VideoSlide/VideoSlide';
import Pagination from './Pagination/Pagination';
import CategoryButton from './CategoryButton/CategoryButton';
import SortButton from './SortButton/SortButton';
import FilterButton from './FilterButton/FilterButton';
import { GET_PRODUCT_API } from '../../../config.js';
import './Tealist.scss';

class TeaList extends React.Component {
  state = {
    products: [],
    video: [],
    filterId: 0,
  };

  fetchAllProducts = () => {
    fetch(`${GET_PRODUCT_API}`)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
    this.props.history.push({
      pathname: '/tealist',
    });
  };

  fetchMutateProducts = () => {
    fetch(`${GET_PRODUCT_API + this.props.location.search}`)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  componentDidMount() {
    this.fetchAllProducts();
    fetch('/data/video.json')
      .then(response => response.json())
      .then(data => this.setState({ video: data }));
  }

  componentDidUpdate = prevProps => {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchMutateProducts();
    }
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

  makeButtonArray = totalPage => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  render() {
    const { search } = this.props.location;
    const { products, video } = this.state;
    const { data } = products;

    let totalProductsCount = 0;
    let totalPage = 0;
    let pages = 0;

    if (data && data.length !== 0) {
      totalProductsCount = data[0].total_products;
      totalPage = data[0].total_page;
      pages = this.makeButtonArray(totalPage);
    }

    return (
      <div className="tealist">
        <VideoSlide products={products} video={video} />
        <main className="main-container">
          <aside className="aside-menu">
            <h1 className="title">TEA SHOP</h1>
            <button className="list-in-title" onClick={this.fetchAllProducts}>
              TEA
            </button>
            <CategoryButton products={products} addQuery={this.addQuery} />
          </aside>
          <section className="teashop">
            <header className="teashop-header">
              <h1 className="title">Tea shop</h1>
              <SortButton SORT={SORT} addQuery={this.addQuery} />
            </header>
            <section className="teashop-filter">
              <span className="total">
                총 <strong className="bold">{totalProductsCount}</strong>
                개의 상품이 있습니다.
              </span>
              <FilterButton FILTER={FILTER} />
            </section>
            <section className="teashop-list">
              <ul className="list-tea">
                {products.products_info &&
                  products.products_info.map((product, idx) => (
                    <Tea key={idx} product={product} match={this.props.match} />
                  ))}
              </ul>
            </section>
            <Pagination
              pages={pages}
              fetchMutateProducts={this.fetchMutateProducts}
              data={data}
              addQuery={this.addQuery}
            />
          </section>
          <Link to="!!#" className="top">
            <i className="fas fa-arrow-up" />
          </Link>
        </main>
      </div>
    );
  }
}

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
