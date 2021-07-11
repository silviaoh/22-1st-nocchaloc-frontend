import React from 'react';
import { Link } from 'react-router-dom';
import './Selectlist.scss';

class Selectlist extends React.Component {
  state = {
    isClicked: false,
  };

  selectShoppingBag = ({ target }) => {
    this.toggleOptions();
    const enclose = target.className.includes('enclose') ? true : false;

    this.props.includeBagPrice(enclose);
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
        <ul className={this.state.isClicked ? 'options display' : 'options'}>
          <li className="options-list">
            <button className="option-product" onClick={this.selectShoppingBag}>
              쇼핑백 동봉 안함
            </button>
          </li>
          <li className="options-list">
            <button
              className="option-product enclose "
              onClick={this.selectShoppingBag}
            >
              쇼핑백 동봉 함
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Selectlist;
