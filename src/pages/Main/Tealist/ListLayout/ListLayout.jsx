import React from 'react';
import Pagination from '../Paginaion/Pagination';
import Tea from '../Tea/Tea';
import './ListLayout.scss';

class ListLayout extends React.Component {
  state = {
    offset: 0,
    perPage: 25,
    currentPage: 0,
    pageCount: 0,
    postData: [],
    activeId: 0,
  };

  componentWillMount() {
    this.slicePostData();
  }

  componentWillUnmount() {
    clearTimeout(this.slicePostData);
  }

  slicePostData = () => {
    const slice = this.props.products.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const postData = slice.map(product => (
      <Tea key={product.id} product={product} />
    ));

    this.setState({
      pageCount: Math.ceil(this.props.products.length / this.state.perPage),
      postData,
    });
  };

  handleNumberClick = ({ target }) => {
    const selectedPage = target.id;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
        activeId: target.id,
      },
      () => {
        this.slicePostData();
      }
    );
  };

  render() {
    setTimeout(this.slicePostData, 500);
    return (
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
            총 <strong className="bold">{this.props.totalProductsCount}</strong>
            개의 상품이 있습니다.
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
          <ul className="list-tea">{this.state.postData}</ul>
        </section>
        <Pagination
          products={this.props.products}
          handleNumberClick={this.handleNumberClick}
          pageCount={this.state.pageCount}
          slicePostData={this.slicePostData}
        />
      </section>
    );
  }
}

export default ListLayout;
