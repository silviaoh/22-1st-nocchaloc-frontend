import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="left1">
            <h3>고객상담센터 ∙ 주문 배송/문의</h3>
            <h1>080-808-8888</h1>
          </div>

          <div className="left2">
            <h3>help@nocchaloc.com</h3>
            <h4>카카오톡ID: nocchaloc</h4>
          </div>

          <div className="right1">
            <i class="fas fa-map-marker-alt"></i>매장안내
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
