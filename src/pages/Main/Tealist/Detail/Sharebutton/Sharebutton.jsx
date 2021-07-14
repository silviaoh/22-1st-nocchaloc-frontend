import React, { useRef } from 'react';
import './Sharebutton.scss';

class Sharebutton extends React.Component {
  constructor() {
    super();
    this.urlInput = React.createRef();
  }

  copyToClipboard = () => {
    const element = this.urlInput.current;
    element.select();
    document.execCommand('copy');
    alert('Ctrl+V로 붙여넣기하세요.');
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
