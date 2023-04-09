import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`

`;

const StyledButton = styled.button`

`;

const StyledDiv = styled.div`
 
`;

const StyledSpan = styled.span`

`;

function SignInForm() {


    const initInputValue = {
        email: "",
        password: "",
    };

    const [inputValue, setInputValue] = useState(initInputValue);
    const { email, password } = inputValue;

    const onChangeInputValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value.toString().trim(),
        });
        console.log(email, password)
    };

    function onClickButton(event) {
        event.preventDefault();
        console.log("login!");

    }

    return (
        <>
            <StyledInput
                type="text"
                name="email"
                value={inputValue.email}
                onChange={onChangeInputValue}
                placeholder="E-MAIL"
            />
            <StyledInput
                type="text"
                name="password"
                value={inputValue.password}
                onChange={onChangeInputValue}
                placeholder="PASSWORD"
            />
            <StyledDiv>
                <StyledSpan>회원가입 하기</StyledSpan>
                <StyledSpan>아이디 찾기</StyledSpan>
                <StyledSpan>비밀번호 찾기</StyledSpan>
            </StyledDiv>
            <StyledButton onClick={onClickButton}>로그인하기</StyledButton>
        </>
    );
}

export default SignInForm;
