import React from 'react';
import { withRouter } from 'react-router-dom';
import './SortButton.scss';

class SortButton extends React.Component {
  state = {
    sortId: 0,
  };

  handleSortClick = id => {
    this.setState({ sortId: id });
    this.props.addQuery('sort', id);
  };

  render() {
    const { search } = this.props.location;

    return (
      <div className="header-sort">
        {this.props.SORT.map(option => {
          return (
            <button
              key={option.id}
              className={`sort ${
                search.includes(`sort=${option.id}`) ? 'active' : ''
              }`}
              onClick={() => this.handleSortClick(option.id)}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default withRouter(SortButton);
