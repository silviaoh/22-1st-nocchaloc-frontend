import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleButton = () => {
    const { userId, userPw } = this.state;
    return userId.includes('@') && userPw.length >= 5;
  };

  signInSuccess = () => {
    this.props.history.push('/');
    fetch('http://10.58.0.109:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message === 'Success') {
          this.props.history.push('/');
          // localStorage.setItem("TOKEN, result.token");
        } else {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      });
  };

  render() {
    const isEnabled = this.handleButton();

    return (
      <>
        <div className="login-container">
          <div className="wrap">
            <h1 className="login-text">Log in</h1>
            <div className="input-login-box">
              <input
                type="text"
                class="input-login"
                id="userId"
                name="userId"
                placeholder="아이디"
                onChange={this.handleInput}
                onKeyUp={this.handleButton}
              />
              <input
                type="password"
                class="input-password"
                id="userPw"
                name="userPw"
                placeholder="비밀번호"
                onChange={this.handleInput}
                onKeyUp={this.handleButton}
              />
            </div>
            <button
              className="login-btn"
              id="btnLogin"
              onClick={this.signInSuccess}
              disabled={!isEnabled}
              style={{ opacity: isEnabled ? 1 : 0.5 }}
            >
              로그인
            </button>
            <div className="login-link-box">
              <Link to="/">회원가입</Link>
              <i className="bar">|</i>
              <Link to="/">아이디 찾기</Link>
              <i className="bar">|</i>
              <Link to="/">비밀번호 찾기</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
