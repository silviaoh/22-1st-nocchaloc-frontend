import React from 'react';
import { Link } from 'react-router-dom';
// import NavList from './NavData';
import '../../styles/common.scss';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <Link to="/">
              <img
                className="logo"
                src="/images/Main/logo.svg"
                alt="logo"
              ></img>
            </Link>
            <ul className="navbar-menu">
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
            <div className="nav-right">
              <i class="fas fa-search"></i>
              <i class="fas fa-cart-plus"></i>
              <div className="menubox">
                <Link to="/" className="login">
                  로그인
                </Link>
                <Link to="/" className="signUp">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
