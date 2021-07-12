import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

class Nav extends React.Component {
  state = {
    lists: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/tealist.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          lists: data.lists,
        });
      });
  }
  render() {
    return (
      <div className="Nav">
        <div className="nav-inner">
          <Link to="/">
            <img alt="logo" src="/images/Main/logo.svg" className="logo" />
          </Link>
          <nav className="navbar">
            <div className="dropdown">
              <ul className="menu-list">
                {NAV_LIST.map(list => {
                  return (
                    <li key={list.id}>
                      <Link to="#">{list.name}</Link>
                    </li>
                  );
                })}
              </ul>

              <div className="dropdown-content">
                <div className="row">
                  <div className="column">
                    <Link to="/tealist">티/티푸드</Link>
                    <ul className="depth-content">
                      <div className="depth-row">
                        <div className="depth-column">
                          {this.state.lists.map(lists => {
                            return (
                              <li key={lists.id}>
                                <Link to="#">{lists.name}</Link>
                              </li>
                            );
                          })}
                        </div>
                      </div>
                    </ul>
                    <Link to="/">티웨어</Link>
                    <Link to="/">선물추천</Link>
                    <Link to="/">베스트</Link>
                    <Link to="/">녹차록 라운지</Link>
                  </div>

                  <div className="column">
                    <Link to="/">상품후기</Link>
                    <Link to="/">선물하기</Link>
                    <Link to="/">다다일상</Link>
                    <Link to="/">매장 방문기</Link>
                    <Link to="/">차 알아가기</Link>
                  </div>
                  <div className="column">
                    <Link to="/">이벤트</Link>
                    <Link to="/">온라인 쇼핑혜택</Link>
                    <Link to="/">인스타그램</Link>
                  </div>
                  <div className="column">
                    <Link to="/">일구다,가꾸다</Link>
                    <Link to="/">Since 1979</Link>
                    <Link to="/">녹차록 차밭 이야기</Link>
                    <Link to="/">숫자로 보는 녹차록</Link>
                    <Link to="/">티하우스 메뉴</Link>
                    <Link to="/">매거진</Link>
                  </div>
                  <div className="column">
                    <Link to="/">둘러보기</Link>
                    <Link to="/">티스톤 예약</Link>
                    <Link to="/">제주 녹차록 맵</Link>
                  </div>
                </div>
              </div>
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
    );
  }
}
const NAV_LIST = [
  { id: 1, name: '티샵' },
  { id: 2, name: '티라이프' },
  { id: 3, name: '이벤트' },
  { id: 4, name: '스토리' },
  { id: 5, name: '제주 티뮤지엄' },
];

export default Nav;
