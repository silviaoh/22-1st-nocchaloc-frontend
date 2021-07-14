import React from 'react';
import { withRouter } from 'react-router-dom';

import './CategoryButton.scss';

class CategoryButton extends React.Component {
  handleCategoryClick = id => {
    let pathname = this.props.location.pathname;
    let searchParams = new URLSearchParams(this.props.location.search);
    this.props.addQuery('category', id);
    if (this.props.location.search.includes('limit')) {
      searchParams.delete('offset');
      searchParams.delete('limit');

      this.props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
    }
  };

  render() {
    const { search } = this.props.location;
    const { products, CATEGORY } = this.props;

    return (
      <ul className="aside-menu-container">
        {CATEGORY.map((menu, idx) => (
          <li className="menu-name" key={menu}>
            <button
              className={`name-item ${
                search.includes(`category=${idx + 1}`) ? 'active' : ''
              }`}
              onClick={() => this.handleCategoryClick(idx + 1)}
            >
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(CategoryButton);
