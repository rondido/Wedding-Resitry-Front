import React, { useEffect } from "react";
import axios from "axios";
function Callback() {
    useEffect(async () => {
        try {
            const url = await new URL(window.location.href);
            const code = url.searchParams.get("code");
            const uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
            const encoded_uri = encodeURI(uri);

            if (code) {
                axios
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
                    .then((res) => {
                        const access_token = res.data.access_token
                        axios.get('https://kapi.kakao.com/v2/user/me', {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + access_token
                            },
                        }).then((res)=> {
                            console.log(res.data.id, res.data.kakao_account.email
                        )})
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        } catch (err) {

            console.log(err)
        }
    }, []);

    return <div>Callback for TEST</div>;
}

export default Callback;
