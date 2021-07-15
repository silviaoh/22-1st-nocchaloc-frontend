import React from 'react';
import { withRouter } from 'react-router-dom';

import './CategoryButton.scss';

class CategoryButton extends React.Component {
  handleCategoryClick = id => {
    const searchParams = new URLSearchParams(this.props.location.search);

    if (
      this.props.location.search.includes('limit') &&
      this.props.location.search.includes('offset')
    ) {
      searchParams.delete('offset');
      searchParams.delete('limit');
      searchParams.set('category', id);

      this.props.history.push({
        search: searchParams.toString(),
      });
    } else {
      this.props.addQuery('category', id);
    }
  };

  render() {
    const { search } = this.props.location;
    const { products } = this.props;

    return (
      <ul className="aside-menu-container">
        {products.category_info &&
          products.category_info.map((menu, idx) => (
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
