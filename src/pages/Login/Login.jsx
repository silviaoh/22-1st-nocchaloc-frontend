import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

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
    return userId.includes('Number') && userPw.length >= 8;
  };

  signInSuccess = () => {
    this.props.history.push('/');
    fetch('http://10.58.2.59:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.message === 'SUCCESS') {
          this.props.history.push('/');
          localStorage.setItem('TOKEN', data.TOKEN);
        } else {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      });
  };

  render() {
    // const BtnIsEnabled = this.handleButton();

    return (
      <>
        <section className="login-container">
          <div className="wrap">
            <h1 className="login-text">Log in</h1>
            <div className="input-login-box">
              <input
                type="text"
                className="input-login"
                id="userId"
                name="userId"
                placeholder="아이디"
                onChange={this.handleInput}
              />
              <input
                type="password"
                className="input-password"
                id="userPw"
                name="userPw"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
            </div>
            <button
              className="login-btn"
              id="btnLogin"
              onClick={this.signInSuccess}
              // disabled={!BtnIsEnabled}
              // style={{ opacity: BtnIsEnabled ? 1 : 0.5 }}
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
