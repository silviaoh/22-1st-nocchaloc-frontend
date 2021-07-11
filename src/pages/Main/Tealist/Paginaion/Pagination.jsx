import React from 'react';
import '../Tealist.scss';
import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    pageNumbers: [],
    initialNumber: 0,
    pagePerNumbers: 5,
    totalStep: 0,
    clickCount: 0,
    postNumbers: [],
  };

  componentWillMount() {
    this.makeNumsArray();
  }

  componentWillUnmount() {
    clearTimeout(this.makeNumsArray);
  }

  componentDidUpdate() {
    setTimeout(this.makeNumsArray, 1000);
  }

  handleArrowClick = ({ target }) => {
    target.className.includes('btn-right') ||
    target.className.includes('fa-chevron-right')
      ? this.state.totalStep - 1 > this.state.clickCount &&
        this.setState({ clickCount: this.state.clickCount + 1 })
      : this.state.clickCount > 0 &&
        this.setState({ clickCount: this.state.clickCount - 1 });
    const initialNumber = this.state.clickCount * this.state.pagePerNumbers;

    this.setState(
      {
        initialNumber: initialNumber,
      },
      () => {
        this.slicePageNumber();
      }
    );
  };

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
      totalStep: Math.ceil(
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
    return (
      <section className="pagination">
        <div className="pagination-in">
          <div className="lefts">
            <button className="btn-home">
              <i className="fas fa-angle-double-left" />
            </button>
            <button className="btn-left" onClick={this.handleArrowClick}>
              <i className="fas fa-chevron-left" />
            </button>
          </div>
          <div className="nums">{this.state.postNumbers}</div>
          <div className="rights">
            <button className="btn-right" onClick={this.handleArrowClick}>
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
