// import React from "react";
import React, { useEffect } from "react";
import axios from "axios";
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {authState, modalStateAtom} from "./atom.js";
function Callback() {
    const setAuthState = useSetRecoilState(authState);
    const authStates = useRecoilValue(authState);
    const [modalState, setModalState] = useRecoilState(modalStateAtom);

//     useEffect(async () => {
//         try {
//             const uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
//             const encoded_uri = encodeURI(uri);
//             const currentUrl = window.location.href;
//             const searchParams = new URL(currentUrl).searchParams;
//             const code = searchParams.get('code');
//
//             if (code) {
//                 axios
//                     .post(
//                         `/kakao-oauth/token`,
//                         {
//                             code: code,
//                             grant_type: "authorization_code",
//                             redirect_uri: encoded_uri,
//                             client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
//                         },
//                         { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//                     )
//                     .then((res) => {
//                         const access_token = res.data.access_token
//                         axios.get('https://kapi.kakao.com/v2/user/me', {
//                             headers: {
//                                 "Content-Type": "application/x-www-form-urlencoded",
//                                 "Authorization": "Bearer " + access_token
//                             },
//                         }).then((res)=> {
//                             console.log(res.data)
//                             console.log(res.data.id, res.data.kakao_account.email)
//
//                             setAuthState({provider: 'kakao', email: res.data.kakao_account.email, id: res.data.id});
//                             console.log(authStates)
//                             localStorage.setItem('k_id', res.data.id)
//                             localStorage.setItem('k_email', res.data.kakao_account.email)
//                         })
//                             .catch((err) => {
//                                 console.log(err);
//                             });
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     });
//             }
//         } catch (err) {
//             console.log(err)
//         }
//     }, []);
//
//     return <div>Callback for TEST</div>;
// }



    useEffect(() => {
    const getKakaoInfo = async ()=>{
        try {
            const uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
            const encoded_uri = encodeURI(uri);
            const currentUrl = window.location.href;
            const searchParams = new URL(currentUrl).searchParams;
            const code = searchParams.get('code');

            if (code) {
                if (modalState) {
                await axios
                    .post(
                        `/kakao-oauth/token`,
                        {
                            code: code,
                            grant_type: "authorization_code",
                            redirect_uri: encoded_uri,
                            client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
                        },
                        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
                    )
                    .then(async (res) => {
                        const access_token = res.data.access_token
                        await axios.get('https://kapi.kakao.com/v2/user/me', {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + access_token
                            },
                        }).then(async (res)=> {
                            console.log(res.data)
                            console.log(res.data.id, res.data.kakao_account.email)

                            setAuthState({provider: 'kakao', email: res.data.kakao_account.email, id: res.data.id});
                            localStorage.setItem('k_id', res.data.id)
                            localStorage.setItem('k_email', res.data.kakao_account.email)
                            await setModalState(false); // close the modal on successful API call
                        })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

        getKakaoInfo()
    }, [modalState, authStates]);

    return <div>Callback for TEST         {authStates.provider},
        {authStates.id},
        {authStates.email},, {modalState}</div>;
}

export default Callback;
