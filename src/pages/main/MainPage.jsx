import React, { useEffect, useState } from "react";
import MainContainer from "../../containers/main/MainContainer";
import { getAccessToken } from "../../tokens/token";
const token = getAccessToken();
export default function MainPage() {
  const [tokenData, setTokenData] = useState();
  useEffect(() => {
    setTokenData(token);
  }, [token]);
  return <MainContainer token={tokenData} />;
}
