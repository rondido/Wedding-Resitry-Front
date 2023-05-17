import React from 'react';
import styled from 'styled-components';
import kakao from '@/assets/icons/kakao.svg';

const StyledDiv = styled.div`
  border: none;
  height: 45px;
  width: 40%;
  margin-bottom: 3rem;
  min-width: 350px;
  background-color: #fee500;
  border-radius: 10px;
  margin-top: 0.5rem;
  position: relative;

  ::before {
    content: '';
    width: 32px;
    display: block;
    height: 33px;
    top: 15%;
    position: absolute;
    margin-left: 0.5rem;
    background: url(${kakao}) no-repeat;
  }
`;


import KakaoLogin from "react-kakao-login";

const KakaoSignInButton =()=>{

    const kakaoClientId = import.meta.env.VITE_KAKAO_JS_KEY;
    const kakaoOnSuccess = async (data)=>{
        console.log(data)
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return(
        <StyledDiv>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
                onLogout={console.info}
                style={{backgroundColor: "#fee500",
                    border: "none",
                    height: "3.2em",
                    width: "100%",
                    minWidth: "140px"}}
            >
            </KakaoLogin>
        </StyledDiv>

    )
}

export default KakaoSignInButton
