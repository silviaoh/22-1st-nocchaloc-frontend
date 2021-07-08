import React from 'react';
import { Link } from 'react-router-dom';
import './Selectlist.scss';

class Selectlist extends React.Component {
  render() {
    return (
      <div className="option-bar">
        <Link className="value-box">
          <span className="value">쇼핑백(+100원)</span>
          {/*after */}
        </Link>
        <ul className="options">
          <li className="options-list">
            <Link className="option-product">쇼핑백 동봉 안함</Link>
          </li>
          <li className="options-list">
            <Link className="option-product">쇼핑백 동봉 함</Link>
          </li>
        </ul>
        {/*쇼핑백무료동봉 데이터 들어오지 않으면 <p className="disable">쇼핑백 무료 동봉</p> */}
      </div>
    );
  }
}

export default Selectlist;
