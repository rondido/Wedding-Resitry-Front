import React from 'react';
import styled from 'styled-components';
import kakao from '@/assets/icons/kakao.svg';
import KakaoLogin from "react-kakao-login";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {authTokenAtom} from "@/state/authState.js";


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

const KakaoSignInButton =()=>{

    const navigate = useNavigate();
    const setAuthToken = useSetRecoilState(authTokenAtom);

    const kakaoClientId = import.meta.env.VITE_KAKAO_JS_KEY;
    const kakaoOnSuccess = async (data)=>{
        console.log(data.profile.id)
        console.log(data.profile.kakao_account.email)


        const response = await axios.post('http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/login/oauth/kakao', {
            email : data.profile.kakao_account.email,
            password: 'K' + data.profile.id
        })
        // sns 로그인 최초
        if (response.data.data.needMoreInfo) {
            console.log('needMore?', response.data.data.needMoreInfo)
            navigate('/signup-moreinfo', { state: { password: 'K'+ data.profile.id, email: data.profile.kakao_account.email } })
        } else {
            alert('로그인 성공!')

            const { accessToken, refreshToken } = response.data.data;

            setAuthToken({accessToken: accessToken, refreshToken: refreshToken});

            localStorage.setItem('refreshToken', accessToken)
            localStorage.setItem('accessToken', refreshToken)

            navigate('/')
        }


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
