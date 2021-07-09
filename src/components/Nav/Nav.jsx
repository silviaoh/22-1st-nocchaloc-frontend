import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    // const NAV_LIST = [
    //   {name:"티샵", path="/tea-life"},
    //   {name:"이벤트", path="/event"},
    // ]
    return (
      <>
        {/* Navigation menu */}
        <div className="Nav">
          <div className="nav-inner">
            <img alt="logo" src="/images/Main/logo.svg" className="logo" />
            <Link to="/"></Link>
            <nav className="navbar">
              <div className="nav-menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/">티샵</Link>
                  </li>
                  <li>
                    <Link to="/">티라이프</Link>
                  </li>
                  <li>
                    <Link to="/">이벤트</Link>
                  </li>
                  <li>
                    <Link to="/">스토리</Link>
                  </li>
                  <li>
                    <Link to="/">제주 티뮤지엄</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="nav-side">
              <div className="menubox-icon">
                <i class="fas fa-search"></i>
                <i class="fas fa-cart-plus"></i>
              </div>
              <div className="menubox-member">
                <div className="nav-login">
                  <Link to="/">로그인</Link>
                </div>
                <div className="nav-signup">
                  <Link to="/">회원가입</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
