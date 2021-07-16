import React from 'react';
import { validationFunction } from '../../utils/validation';
import { Link } from 'react-router-dom';
import { SIGNIN_API } from '../../config';
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

  signInSuccess = () => {
    const { userId, userPw } = this.state;
    fetch(`${SIGNIN_API}/users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        account: userId,
        password: userPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          this.props.history.push('/');
          localStorage.setItem('TOKEN', data.TOKEN);
        }
      });
  };
  doValidation = () => {
    const inputValues = Object.entries(this.state);
    const validArray = inputValues.map(([key, value]) => {
      return validationFunction[key](value);
    });
    return validArray.every(el => el);
  };

  render() {
    const { userId, userPw } = this.state;
    const allValid = this.doValidation();

    return (
      <section className="login">
        <section className="login-container">
          <div className="wrap">
            <h1 className="login-text">Log in</h1>
            <div className="input-login-box">
              <input
                value={userId}
                type="text"
                className="input-login"
                name="userId"
                placeholder="아이디"
                onChange={this.handleInput}
              />
              <input
                value={userPw}
                type="password"
                className="input-password"
                name="userPw"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
            </div>
            <button
              className={`login-btn ${allValid ? 'acitve' : ''}`}
              onClick={this.signInSuccess}
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
      </section>
    );
  }
}

export default Login;
