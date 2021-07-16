import React from 'react';
import { withRouter } from 'react-router-dom';
import './FiterButton.scss';

class FilterButton extends React.Component {
  state = {
    filterId: 0,
  };

  removeQueryArray = (splited, id) => {
    return splited.map(element => {
      const [query, value] = element.split('=');
      if (query.includes('product_type') && Number(value) === id) {
        return null;
      }
      return element;
    });
  };

  reduceQueryArray = removeResult => {
    return removeResult.reduce((acc, cur) => {
      if (!acc && cur) {
        return `?${cur}`;
      }
      if (cur) {
        return acc + '&' + cur;
      }
      return acc;
    }, '');
  };

  appendQuery = (key, value) => {
    let searchParams = new URLSearchParams(this.props.location.search);
    searchParams.append(key, value);

    this.props.history.push({
      search: searchParams.toString(),
    });
  };

  removeQuery = id => {
    const nowQuery = this.props.location.search;

    const splitedQuery = nowQuery.replace('?', '').split('&');
    const removeResult = this.removeQueryArray(splitedQuery, id);
    const queryString = this.reduceQueryArray(removeResult);
    console.log(queryString);

    this.props.history.push({
      search: queryString,
    });
  };

  handleFilteringClick = id => {
    const { location, history } = this.props;

    this.setState({ filterId: id });

    if (id === 0) {
      history.push('/tealist');
    } else {
      location.search.includes(`product_type=${id}`)
        ? this.removeQuery(id)
        : this.appendQuery('product_type', id);
    }
  };

  render() {
    const { search } = this.props.location;

    return (
      <div className="filter-button">
        {this.props.FILTER.map((condition, idx) => (
          <button
            className={`link ${
              search.includes(`product_type=${condition.id}`)
                ? 'active'
                : '' || (idx === 0 && this.state.filterId === 0 ? 'active' : '')
            }`}
            key={condition.id}
            onClick={() => this.handleFilteringClick(condition.id)}
          >
            {condition.name}
          </button>
        ))}
      </div>
    );
  }
}

export default withRouter(FilterButton);
