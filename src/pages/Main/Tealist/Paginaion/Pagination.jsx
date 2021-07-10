import React from 'react';
import { Link } from 'react-router-dom';
import '../Tealist.scss';

class Pagination extends React.Component {
  state = {
    pageNumbers: [],
    initialNumber: 0,
    pagePerNumbers: 5,
    numberCount: 0,
  };

  componentDidMount() {
    this.makeNumsArray();
  }

  componentWillUnmount() {
    clearTimeout(this.makeNumsArray);
  }

  slicePageNumber = () => {
    const sliceNumbers = this.state.pageNumbers.slice(
      this.state.initialNumber,
      this.state.initialNumber + this.state.pagePerNumbers
    );
    const postNumbers = sliceNumbers.map(number => (
      <button
        className={'num ' + (this.props.activeId == number && 'active')}
        key={number}
        id={number}
        onClick={this.props.handleNumberClick}
      >
        {number + 1}
      </button>
    ));

    this.setState({
      numberCount: Math.ceil(
        this.state.pageNumbers.length / this.state.pagePerNumbers
      ),
      postNumbers,
    });
  };

  makeNumsArray = () => {
    let result = [];
    for (let i = 0; i < this.props.pageCount; i++) {
      result.push(i);
    }
    this.setState(
      {
        pageNumbers: result,
      },
      () => {
        this.slicePageNumber();
      }
    );
  };

  render() {
    setTimeout(this.makeNumsArray, 100);
    return (
      <section className="pagination">
        <div className="pagination-in">
          <div className="lefts">
            <button className="btn-home">
              <i className="fas fa-angle-double-left" />
            </button>
            <button className="btn-left" onClick={this.handleLeftClick}>
              <i className="fas fa-chevron-left" />
            </button>
          </div>
          <div className="nums">{this.state.postNumbers}</div>
          <div className="rights">
            <button className="btn-right" onClick={this.handleRightClick}>
              <i className="fas fa-chevron-right" />
            </button>
            <button className="btn-end">
              <i className="fas fa-angle-double-right" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Pagination;
