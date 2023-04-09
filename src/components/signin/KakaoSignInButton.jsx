import React from 'react'
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
const kakao_auth_url = `kakao-oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
export default function KakaoSignInButton() {

    function onClick() {
        window.open(kakao_auth_url,    "_blank",
            "width = 500, height = 600")
    }

    return <button onClick={onClick}>카카오로 로그인</button>}
