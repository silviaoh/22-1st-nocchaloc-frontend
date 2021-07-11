import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import KakaoButton from './KakaoButton/KakaoButton';
import './Sharebutton.scss';

class Sharebutton extends React.Component {
  constructor() {
    super();
    this.state = {
      success: true,
    };
    this.urlInput = React.createRef();
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
        <KakaoButton />
      </div>
    );
  }
}

export default Sharebutton;
