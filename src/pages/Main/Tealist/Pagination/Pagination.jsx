import React from 'react';
import { withRouter } from 'react-router-dom';
import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    buttonId: 0,
  };

  handlePagination = num => {
    this.setState({ isFirst: num === 0 });

    const origin = 24;
    const offset = origin * (num - 1);
    const limit = origin * num;

    this.setState({ buttonId: num });

    let searchParams = new URLSearchParams(this.props.location.search);
    searchParams.set('offset', offset);
    searchParams.set('limit', limit);

    this.props.history.push({
      search: searchParams.toString(),
    });
  };

  render() {
    return (
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
            {this.props.pages.map?.((page, idx) => {
              return (
                <button
                  className={`num ${
                    (page === this.state.buttonId && 'active') ||
                    (idx === 0 && this.state.buttonId === 0 ? 'active' : '')
                  }`}
                  key={page}
                  onClick={() => this.handlePagination(page)}
                >
                  {page}
                </button>
              );
            })}
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
    );
  }
}

export default withRouter(Pagination);
