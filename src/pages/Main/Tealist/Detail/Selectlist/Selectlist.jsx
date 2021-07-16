import React from 'react';
import { Link } from 'react-router-dom';
import './Selectlist.scss';

class Selectlist extends React.Component {
  state = {
    isClicked: false,
  };

  selectShoppingBag = id => {
    this.toggleOptions();

    this.setState({ currentId: id });
    this.props.includeBagPrice(id);
  };

  toggleOptions = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <div className="option-bar">
        <Link className="value-box" onClick={this.toggleOptions}>
          <span className="value">쇼핑백(+100원)</span>
          {/*after */}
        </Link>
        {this.state?.isClicked && (
          <ul className="options">
            {SELECT_SHOPPINGBAG.map((enabled, idx) => {
              return (
                <li className="options-list" key={idx}>
                  <button
                    className="option-product"
                    onClick={() => {
                      this.selectShoppingBag(idx + 1);
                    }}
                  >
                    {enabled.content}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const SELECT_SHOPPINGBAG = [
  { content: '쇼핑백 동봉 함' },
  { content: '쇼핑백 동봉 안함' },
];

export default Selectlist;
