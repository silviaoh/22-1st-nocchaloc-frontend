import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-header">
          <div className="header-container">
            <div className="description">
              <span className="site">녹차록</span>
              <span className="content">평온한 일상을 위한 한 잔</span>
            </div>
            <Link to="/Login" className="login-link">
              로그인
            </Link>
          </div>
        </section>
        <section className="footer-bottom">
          <div className="bottom-container">
            <div className="logo-container">
              <img alt="Logo" src="/images/greenTree.png" className="logo" />
            </div>
            <div className="etc-info">
              <address className="address">
                녹차록 주소: 서울특별시 놀려구 한바탕대로 150,
                옥탑층(자주오는2가)
              </address>
              <p className="info">
                녹차록은 오설록 홈페이지 클론 프로젝트입니다.
              </p>
              <p className="copyright">&copy; Copyright 2021 녹차록 Team</p>
            </div>
            <div className="service-box">
              <div className="box">
                <h1 className="service-title">녹차록 노력서비스</h1>
                <div className="service-bottom">
                  <img
                    alt="Service"
                    src="/images/overcoming.jpg"
                    className="service-img"
                  />
                  <p className="addition">
                    언제나 최선을 다하며 좋은 결과물을 낼 수 있도록 협력하고
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
