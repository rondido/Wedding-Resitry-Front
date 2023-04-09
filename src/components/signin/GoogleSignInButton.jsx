import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styled from "styled-components";
import googlelogo from "../../assets/icons/google.svg";

const StyledButton = styled.button`
  border: 1px solid #000;
  height: 45px;
  width: 350px;
  border-radius: 5px;
  span {
    margin-left: 5px;
  }
`;




function GoogleButton() {
    const googleLogin = useGoogleLogin({
        onSuccess: async (res) => {
            console.log(res.access_token);

            const {
                data: { email },
            } = await axios.get("https://openidconnect.googleapis.com/v1/userinfo", {
                params: {
                    access_token: res.access_token,
                },
            });

            // TODO 구글한테 받은 유저 이메일을 백에 전달할 것
            console.log(email);
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    return (
        <StyledButton onClick={googleLogin}>
            <img
                src={googlelogo}
                alt="googlelogo"
                width="19px"
                className="icon google"
            />

            <span>구글 계정으로 로그인</span>
        </StyledButton>
    );
}

export default GoogleButton;
