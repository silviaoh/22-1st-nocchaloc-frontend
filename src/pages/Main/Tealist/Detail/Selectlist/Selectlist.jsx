import React, { Component } from 'react';

class Selectlist extends Component {
  render() {
    return (
      <div className="option-bar">
        <Link className="value-box">
          <span className="value">쇼핑백(+100)원</span>
          {/*after */}
        </Link>
        <ul className="options">
          <li className="options-list">
            <Link className="option-product">쇼핑백 동봉 안함</Link>
            <Link className="price">쇼핑백 동봉 함</Link>
          </li>
        </ul>
        {/*쇼핑백무료동봉 데이터 들어오지 않으면 <p className="disable">쇼핑백 무료 동봉</p> */}
        {/*(유료)포장 가능 데이터 들어오면 포장 안함 / 포장함 Selectlist 활성화 들어오지 않으면 <p className="disable">포장 불가</p>*/}
      </div>
    );
  }
}

export default Selectlist;
