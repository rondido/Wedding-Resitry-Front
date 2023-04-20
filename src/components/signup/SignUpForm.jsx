import React, { useState } from "react";

import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const StyledWrapper = styled.div`
width: 100%;
  min-width: 344px;
  margin-top: 4.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(234, 234, 234, 0.4);
  .left{
    margin-top: .5rem;
    label {
      font-size: 10px;
    }
    justify-self: flex-start;
    div {
      margin-top: .5rem;
      font-size: 10px;
      color: #6C6C6CEB;
      line-height: .8rem;
    }
  }
  
  span:last-child {
    span {
      color: #3F80FF;
      margin-left: .5rem;
      cursor: pointer;
    }
    margin-bottom: 1rem;
  }
`

const StyledInput = styled.input`
  min-width: 344px;
  min-height: 44px;
  margin-bottom: .5rem;
  border: 1px solid #818387;
  width: 30%;
  border-radius: 10px;
  padding-left: .8rem;
`;


const StyledDiv = styled.div`
 display: flex;
  min-width: 344px;
  width: 38%;
  
  justify-content: center;
  align-items: center;
  span:first-child {
    align-self: flex-start;
    flex-grow: 1;
  }
  span:nth-child(2) {
    margin-right: 1rem;
  }
`;

const StyledButton = styled.button`
  width: 38%;
  min-height: 44px;
  min-width: 344px;
  border-radius: 10px;
  color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #000000B2;
  border: none;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  margin-top: 3em;
  margin-bottom: .5rem;
`;


function SignUpForm() {
    const navigate = useNavigate();

    const initInputValue = {
        username: '',
        email: "",
        password: "",
        passwordCheck: ''
    };

    const [inputValue, setInputValue] = useState(initInputValue);
    const { email, username, passwordCheck, password } = inputValue;

    const onChangeInputValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value.toString().trim(),
        });
        console.log(username, email, password, passwordCheck)
    };

    function onClickButton(event) {
        event.preventDefault();
        console.log("회원가입!");

    }

    return (
        <StyledWrapper>
            <StyledInput
                type="text"
                name="email"
                value={inputValue.username}
                onChange={onChangeInputValue}
                placeholder="성/이름"
            />
            <StyledInput
                type="text"
                name="email"
                value={inputValue.email}
                onChange={onChangeInputValue}
                placeholder="이메일"
            />
            <StyledInput
                type="text"
                name="password"
                value={inputValue.password}
                onChange={onChangeInputValue}
                placeholder="비밀번호"
            />
            <StyledInput
                type="text"
                name="passwordCheck"
                value={inputValue.passwordCheck}
                onChange={onChangeInputValue}
                placeholder="비밀번호 확인"
            />
            <StyledDiv>
            <div className="left">
            <input type={"checkbox"} id="agree-event"/>
            <label htmlFor="agree-event">
                새 기능, 이벤트 홍보 안내 등의 알림 수신
            </label>
                <div>이용약관의 변경이나 관계 법령에 따라 회원님께 안내되어야 할 중요 고지 사항은 메일 수신 동의 여무에 상관없이 안내될수 있습니다.  </div>
            </div>
            </StyledDiv>
            <StyledButton onClick={onClickButton}>회원가입 하기</StyledButton>
            <span>이미 계정이 있으세요?<span onClick={() => navigate(`/signin`)}>로그인</span></span>


        </StyledWrapper>
    );
}

export default SignUpForm;
