import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;


const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const kakao_auth_url = `kakao-oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function Modal () {
// console.log(kakao_auth_url)
    window.location.assign(kakao_auth_url)
    // '_target'
    // window.open(kakao_auth_url)

    return (
        <ModalContainer>
            <p>모달ㅇㄹㅇㄹㅇㄹㅇㄹ</p>
            {/*<iframe*/}
            {/*    src={`${kakao_auth_url}`}*/}
            {/*    width="800"*/}
            {/*    height="1000"*/}
            {/*    title="Kakao Login Modal"*/}
            {/*/>*/}
        </ModalContainer>
    );
}