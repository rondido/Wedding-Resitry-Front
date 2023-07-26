import React, { useEffect, useState } from "react";
import MainContainer from "../../containers/main/MainContainer";
import { getAccessToken } from "../../tokens/token";

export default function MainPage() {
  const [tokenData, setTokenData] = useState();
  const token = getAccessToken();

  useEffect(() => {
    setTokenData(token);
  }, [token]);
  return <MainContainer token={tokenData} />;
}
