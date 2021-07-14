import React, { Component } from 'react';
import { validationFunction } from '../../utils/validation';
import { Link } from 'react-router-dom';
import { GET_SIGNUP_API } from '../../config';
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

  signUpSuccess = () => {
    // this.props.history.push('/');
    fetch(`${GET_SIGNUP_API}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: this.state.userId,
        userPw: this.state.userPw,
        userName: this.state.userName,
        userBirth: this.state.userBod,
        phoneNum: this.state.phoneNum,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          this.props.history.push('/');
          // localStorage.setItem('TOKEN', data.TOKEN);
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
    const { userName, userBirth, phoneNum, userId, userPw } = this.state;
    // const allValid = this.doValidation();

    return (
      <>
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
                class="input-username"
                name="userName"
                placeholder="이름(실명으로 입력해주세요)"
                onChange={this.handleInput}
              />
              <input
                value={userBirth}
                type="text"
                class="input-birth"
                name="userBod"
                placeholder="생년월일8자리(ex.19980905)"
                onChange={this.handleInput}
              />
              <input
                value={phoneNum}
                type="text"
                class="input-Num"
                name="userNum"
                placeholder="전화번호입력"
                onChange={this.handleInput}
              />

              <input
                value={userId}
                type="text"
                class="input-userId"
                id="userId"
                name="userId"
                placeholder="아이디 (4~12자 영문)"
                onChange={this.handleInput}
              />
              <input
                value={userPw}
                type="password"
                class="input-userPw"
                id="userPw"
                name="userPw"
                placeholder="비밀번호는 영문 대문자, 소문자, 숫자, 특수문자 중 최소 1가지 이상의 문자조합 8자 이상으로 입력해주세요"
                onChange={this.handleInput}
              />
              <button className={`signup-btn`} onClick={this.signUpSuccess}>
                회원가입
              </button>
              {/* <button
                className={`signup-btn ${allValid ? 'acitve' : ''}`}
                onClick={this.signUpSuccess}
                disabled={!allValid}
              >
                회원가입
              </button> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
