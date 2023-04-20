import React from 'react'
import styled from "styled-components";
import kakao from "@/assets/icons/kakao.svg";
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
const kakao_auth_url = `kakao-oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const StyledButton = styled.button`
  border: none;
  height: 45px;
  width: 40%;

  min-width: 350px;
  background-color: #FEE500;
  border-radius: 10px;
  margin-top: .5rem;
  position: relative;
  ::before {
    content: '';
    width: 32px;
    display: block;
    height: 33px;
    top: 15%;
    position: absolute;
    margin-left: .5rem;
    background: url(${kakao}) no-repeat;
    
  }
`;


export default function KakaoSignInButton() {

    function onClick() {
        window.open(kakao_auth_url,    "_blank",
            "width = 500, height = 600")
    }

    return <StyledButton onClick={onClick}>카카오 로그인</StyledButton>}
