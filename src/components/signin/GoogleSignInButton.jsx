import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styled from "styled-components";
import googlelogo from "../../assets/icons/google.svg";

const StyledButton = styled.button`
  border: none;
  height: 45px;
  width: 40%;
  min-width: 350px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 2rem;
  position: relative;
  
  ::before {
    content: '';
    width: 32px;
    display: block;
    height: 33px;
    top: 20%;
    position: absolute;
    align-items: center;
    justify-content: center;
    margin-left: .5rem;
    background: url(${googlelogo}) no-repeat;
  }
`;

function GoogleButton() {
    const googleLogin = useGoogleLogin({
        onSuccess: async (res) => {
            console.log(res.access_token);

            const {
                data: { email, sub },
            } = await axios.get("https://openidconnect.googleapis.com/v1/userinfo", {
                params: {
                    access_token: res.access_token,
                },
            });

            // TODO 구글한테 받은 유저 이메일 + sub를 백에 전달할 것
            console.log(email, sub);
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    return (
        <StyledButton onClick={googleLogin}>
           구글 계정으로 로그인
        </StyledButton>
    );
}

export default GoogleButton;
