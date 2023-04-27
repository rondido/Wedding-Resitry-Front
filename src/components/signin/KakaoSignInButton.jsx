// import React, {useState, useEffect } from 'react'
// import styled from "styled-components";
// import kakao from "@/assets/icons/kakao.svg";
// import axios from "axios";
// // import {useSetRecoilState} from "recoil";
// // import {authState} from "@/containers/signin/atom.js";
//     const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
//     const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
// const kakao_auth_url = `kakao-oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
//
// const StyledButton = styled.button`
//   border: none;
//   height: 45px;
//   width: 40%;
// margin-bottom: 3rem;
//   min-width: 350px;
//   background-color: #FEE500;
//   border-radius: 10px;
//   margin-top: .5rem;
//   position: relative;
//   ::before {
//     content: '';
//     width: 32px;
//     display: block;
//     height: 33px;
//     top: 15%;
//     position: absolute;
//     margin-left: .5rem;
//     background: url(${kakao}) no-repeat;
//
//   }
// `;
//
//
// export default function KakaoSignInButton() {
//     const [popup, setPopup] = useState(null);
//     // const setAuthState = useSetRecoilState(authState);
//
//     const onClick = () => {
//         const popup = window.open(kakao_auth_url, '_blank', "width = 500, height = 600")
//         setPopup(popup)
//     }
//
//
//     useEffect( () => {
//             const uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
//             const encoded_uri = encodeURI(uri);
//         const currentUrl = window.location.href;
//         const searchParams = new URL(currentUrl).searchParams;
//         const code = searchParams.get("code");
//         console.log('code:::', code)
//         if (code) {
//             window.opener.postMessage({ code }, window.location.origin);
// async ()=> {
//     await axios
//                 .post(
//                     `/kakao-oauth/token`,
//                     {
//                         code: code,
//                         grant_type: "authorization_code",
//                         redirect_uri: encoded_uri,
//                         client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
//                     },
//                     { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//                 )
//                 .then((res) => {
//                     const access_token = res.data.access_token
//                     axios.get('https://kapi.kakao.com/v2/user/me', {
//                         headers: {
//                             "Content-Type": "application/x-www-form-urlencoded",
//                             "Authorization": "Bearer " + access_token
//                         },
//                     }).then((res)=> {
//                         console.log(res.data)
//                         console.log(res.data.id, res.data.kakao_account.email)
//                         localStorage.setItem('k_id', res.data.id)
//                         localStorage.setItem('k_email', res.data.kakao_account.email)
//                         window.opener.postMessage({"k_id": res.data.id, "k_email": res.data.kakao_account.email}, window.location.origin);
//                     })
//                         .catch((err) => {
//                             console.log(err);
//                         });
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
// }
//
//         }
//     }, []);
//
//
//     // 로그인 팝입이 열리면 로그인 로직을 처리합니다.
//     useEffect(() => {
//         if (!popup) {
//             return;
//         }
//
//         const kakaoOauthListener = (e) => {
//             // 동일한 Origin 의 이벤트만 처리하도록 제한
//             if (e.origin !== window.location.origin) {
//                 return;
//             }
//             const { code } = e.data;
//             if (code) {
//                 console.log(`The popup URL has URL code param = ${code}`);
//             }
//             popup?.close();
//             setPopup(null);
//         };
//
//         window.addEventListener("message", kakaoOauthListener, false);
//
//         return () => {
//             window.removeEventListener("message", kakaoOauthListener);
//             popup?.close();
//             setPopup(null);
//         };
//     }, [popup]);
//
//
//     const handlePopupClose = (event) => {
//         const isSuccess = event;
//         const data = event.data.success;
//         console.log('closed', event.target.closed)
//         console.log('event', isSuccess, 'data: ', data)
//         if (isSuccess) {
//             // setAuthState({provider: 'kakao', email: 'emailllll', id: 'eee'});
//
//             // setAuthState({provider: 'kakao', email: res.data.kakao_account.email, id: res.data.id});
//             popup?.close();
//         }
//     };
//
//     useEffect(() => {
//         window.addEventListener('message', handlePopupClose);
//         return () => window.removeEventListener('message', handlePopupClose);
//     }, []);
//
//
//     return <StyledButton onClick={onClick}>카카오 로그인
//
//     </StyledButton>}


import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import kakao from '@/assets/icons/kakao.svg';
// import axios from 'axios';
import {useRecoilState, useRecoilValue} from "recoil";
import {authState, modalStateAtom} from "@/containers/signin/atom.js";
import Modal from "@/components/modal/Modal.jsx";
// import Callback from "@/containers/signin/CallBack.jsx";

// const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
// const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
// const kakao_auth_url = `kakao-oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const StyledButton = styled.button`
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

export default function KakaoSignInButton() {
    const authStates = useRecoilValue(authState);
    const outside = useRef();
    const [modalState, setModalState] = useRecoilState(modalStateAtom);
    // const [showCallback, setShowCallback] = useState(false);
        // const uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
        // const encoded_uri = encodeURI(uri);

    const onClick = () => {
        setModalState(true);
    };

    // const handleCallback = (data) => {
    //     setAuthState({
    //         provider: 'kakao',
    //         email: data.kakao_account.email,
    //         id: data.id,
    //     });
    //     localStorage.setItem('k_id', data.id);
    //     localStorage.setItem('k_email', data.kakao_account.email);
    //     setShowCallback(false);
    //     setModalState(false);
    //
    // }

    useEffect(()=>{
        window.addEventListener("message", function (e){
            if (e.origin !== "http://localhost:5173") return;
            console.log('message', e)
        })
        console.log(outside)
        if (!modalState){
            setModalState(false)
        }
    },[modalState, authStates])

    // useEffect(() => {
    //     if (!modalState){
    //         setModalState(false)
    //     }
//         const currentUrl = window.location.href;
//         const searchParams = new URL(currentUrl).searchParams;
//         const code = searchParams.get('code');
// console.log(kakao_auth_url)
//
//         if (code) {
//             (async () => {
//                 try {
//                     const res = await axios.post(
//                         `/kakao-oauth/token`,
//                         {
//                             code: code,
//                             grant_type: 'authorization_code',
//                             redirect_uri: encoded_uri,
//                             client_id: REST_API_KEY,
//                         },
//                         {
//                             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//                         }
//                     );
//
//                     const access_token = res.data.access_token;
//                     const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
//                         headers: {
//                             'Content-Type': 'application/x-www-form-urlencoded',
//                             Authorization: `Bearer ${access_token}`,
//                         },
//                     });
//
//                     const {id, kakao_account: {email}} = await userRes.data;
//                     console.log('userRes!!', userRes)
//                     localStorage.setItem("k_id", String(id));
//                     localStorage.setItem("_email", String(email));
//
//
//
//                     window.opener.postMessage({ code }, window.location.origin, false);
//                     window.opener.postMessage({k_id: id, k_email: email}, window.location.origin, false);
//                     // setPopup(null);
//                     // window.close();
//
//                 } catch (err) {
//                     console.log(err);
//                 }
//             })();
//         }
//     }, [modalState, authStates]);


    return <StyledButton onClick={onClick}> 카카오 로그인
        {modalState && (
            <div ref={outside}  onClick={ (e) => { if(e.target == outside.current) setModalState(false) } }  >
            <Modal />
            </div>
        )}
        {authStates.provider} {authStates.id} {authStates.email}
        {modalState}
    </StyledButton>
}