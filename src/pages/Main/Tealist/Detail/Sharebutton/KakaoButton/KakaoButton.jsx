import React from 'react';
import './KakaoButton.scss';

class KakaoButton extends React.Component {
  componentDidMount() {
    window.Kakao.init('8b745f5f2ce644953d70506049de4e81');
    console.log(window.Kakao.isInitialized());

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
            webUrl: 'http://localhost:3000/detail',
          },
        },
      ],
    });
  }
  render() {
    return (
      <div className="Kakao">
        <a id="kakao-link-btn" href="javascript:;">
          <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
        </a>
      </div>
    );
  }
}

export default KakaoButton;
