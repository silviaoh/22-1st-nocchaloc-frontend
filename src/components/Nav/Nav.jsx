import React from 'react';
import { Link } from 'react-router-dom';
// import NavData from './NavData';
// import NavList from './NavData';
import '../../styles/common.scss';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        {/* Navigation menu */}
        <div className="nav-container">
          <div className="nav-inner">
            <img src="/images/Main/logo.svg" className="logo" alt="logo"></img>
            <Link to="/"></Link>
            <nav className="navbar">
              <div className="nav-menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/">티샵</Link>
                    <ul>
                      {/* <li>티</li>
                      <li>티2</li>
                      <li>티3</li> */}
                    </ul>
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
            {/* inner */}
            {/* <div id="w_lnb" className="w_lnb active">
              <div className="nav-inner">
                <div className="menu_wrap"></div>
                <div className="menu-narrow">
                  <h3 className="nav-hidden">티샵</h3>
                  <ul>
                    <li className="category">
                      <Link to="/">티/티푸드</Link>
                      <div className="depth">
                        <Link to="/">전체보기</Link>
                        <div className="sub_depth">
                          <div className="sub_box">
                            <Link to="/">티</Link>
                            <ul className="sub_menu">
                              <li>명차</li>
                              <li>녹차/발효차/홍차</li>
                              <li>허브티(무카페인)</li>
                              <li>블렌디드티</li>
                              <li>웰니스티</li>
                              <li>파우더</li>
                              <li>세트</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* inner 끝 */}
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
