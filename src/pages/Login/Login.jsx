import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
      idCheck: false,
      pwCheck: false,
      btnChange: '#B9C0A5',
    };
  }

  idCheck = e => {
    this.setState({ userId: e.target.value });
    if (e.target.value.includes('@')) {
      this.setState({ idCheck: true }, () => this.handleButton());
    }
  };

  pwCheck = e => {
    this.setState({ userPw: e.target.value });
    if (e.target.value.length >= 8) {
      this.setState({ pwCheck: true }, () => this.handleButton());
    }
  };

  handleButton = () => {
    if (this.state.idCheck && this.state.pwCheck) {
      this.setState({ btnChange: '#74824c' });
    } else {
      this.setState({ btnChange: '#B9C0A5' });
    }
  };

  signInSuccess = () => {
    fetch('http://10.58.2.59:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        userId: this.state.userId,
        userPw: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          this.props.history.push('/');
          localStorage.setItem('TOKEN', data.TOKEN);
        } else {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      });
  };

  render() {
    return (
      <>
        <section className="login-container">
          <div className="wrap">
            <h1 className="login-text">Log in</h1>
            <div className="input-login-box">
              <input
                type="text"
                className="input-login"
                name="userId"
                placeholder="아이디"
                onChange={this.idCheck}
              />
              <input
                type="password"
                className="input-password"
                name="userPw"
                placeholder="비밀번호"
                onChange={this.pwCheck}
              />
            </div>
            <button
              className="login-btn"
              onClick={this.signInSuccess}
              style={{ backgroundColor: this.state.btnChange }}
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
        </section>
      </>
    );
  }
}

export default Login;
