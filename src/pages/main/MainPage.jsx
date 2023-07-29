import React, { useEffect, useState } from "react";
import MainContainer from "../../containers/main/MainContainer";
import { getAccessToken } from "../../tokens/token";

export default function MainPage() {
  const [tokenData, setTokenData] = useState();
  const [getTokenData, setGuestTokenData] = useState();
  const token = getAccessToken();
  const guestToken = localStorage.getItem("Guest-Info");
  useEffect(() => {
    setTokenData(token);
  }, [token]);
  useEffect(() => {
    setGuestTokenData(guestToken);
  }, [token]);

  return <MainContainer token={tokenData} guestToken={getTokenData} />;
}
