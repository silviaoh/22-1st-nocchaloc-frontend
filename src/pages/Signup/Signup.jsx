import React, { Component } from 'react';
import { validationFunction } from '../../utils/validation';
import { Link } from 'react-router-dom';
import { SIGNUP_API } from '../../config';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userBirth: '',
      userNum: '',
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

  doValidation = () => {
    const inputValues = Object.entries(this.state);
    const validArray = inputValues.map(([key, value]) => {
      return validationFunction[key](value);
    });
    return validArray.every(el => el);
  };

  signUpSuccess = () => {
    const { userName, userBirth, userNum, userId, userPw } = this.state;
    if (this.doValidation()) {
      fetch(`${SIGNUP_API}/users/signup`, {
        method: 'POST',
        body: JSON.stringify({
          name: userName,
          birthday: userBirth,
          phone_number: userNum,
          account: userId,
          password: userPw,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'SUCCESS') {
            this.props.history.push('/login');
          } else {
            alert('입력하신 정보를 확인하세요.');
          }
        });
    }
  };

  render() {
    const { userName, userBirth, userNum, userId, userPw } = this.state;
    const allValid = this.doValidation();
    return (
      <section className="sign-up">
        <div className="header">
          <h1 className="header-text">뷰티포인트 X 녹차록 쇼핑몰 회원가입 </h1>
        </div>
        <div className="signup-container">
          <div className="wrap">
            <h1 className="signup-text">Sign up</h1>
            <div className="input-signup-box">
              <input
                value={userName}
                type="text"
                className="input-username"
                name="userName"
                placeholder="이름(실명으로 입력해주세요)"
                onChange={this.handleInput}
              />
              <input
                value={userBirth}
                type="text"
                className="input-birth"
                name="userBirth"
                placeholder="생년월일8자리(ex.19980905)"
                onChange={this.handleInput}
              />
              <input
                value={userNum}
                type="text"
                className="input-Num"
                name="userNum"
                placeholder="전화번호입력"
                onChange={this.handleInput}
              />

              <input
                value={userId}
                type="text"
                className="input-userId"
                id="userId"
                name="userId"
                placeholder="아이디 (4~12자 영문)"
                onChange={this.handleInput}
              />
              <input
                value={userPw}
                type="password"
                className="input-userPw"
                id="userPw"
                name="userPw"
                placeholder="비밀번호는 영문 대문자, 소문자, 숫자, 특수문자 중 최소 1가지 이상의 문자조합 8자 이상으로 입력해주세요"
                onChange={this.handleInput}
              />
              <button
                className={`signup-btn ${allValid ? 'acitve' : ''}`}
                onClick={this.signUpSuccess}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
