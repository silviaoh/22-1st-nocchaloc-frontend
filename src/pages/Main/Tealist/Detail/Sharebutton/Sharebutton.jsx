import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import KakaoButton from './KakaoButton/KakaoButton';
import './Sharebutton.scss';

class Sharebutton extends React.Component {
  constructor() {
    super();
    this.urlInput = React.createRef();
  }

  componentDidMount() {
    window.Kakao.init('8b745f5f2ce644953d70506049de4e81');

    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '프리미엄 말차',
        description:
          '즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한 블렌디드 티 선물세트입니다.',
        imageUrl:
          'https://www.osulloc.com/upload/kr/ko/adminImage/PW/US/20180406140800938CQ.png?quality=80',
        link: {
          webUrl: 'http://localhost:3000/detail',
        },
      },
      buttons: [
        {
          title: '녹차록에서 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:3000/detail',
            webUrl: 'http://localhost:3000/detail',
          },
        },
      ],
    });
  }

  copyToClipboard = () => {
    const element = this.urlInput.current;
    element.select();
    document.execCommand('copy');
  };

  render() {
    return (
      <div className="sns">
        <button className="share-btn" onClick={this.copyToClipboard}>
          <i className="far fa-copy" />
          <input
            type="text"
            value={`localhost:3000${this.props.location.pathname}`}
            ref={this.urlInput}
            readOnly
          />
        </button>
        <div className="Kakao">
          <a id="kakao-link-btn" href="javascript:;">
            <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sharebutton;
