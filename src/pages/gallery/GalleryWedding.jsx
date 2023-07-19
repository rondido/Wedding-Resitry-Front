import React, { useEffect, useState } from "react";
import GalleryWeddingContainer from "../../containers/gallery/GalleryWeddingContainer";
import { getAccessToken } from "../../tokens/token";

const token = getAccessToken();
export default function GalleryWedding() {
  const [tokenData, setTokenData] = useState();
  useEffect(() => {
    setTokenData(token);
  }, [token]);
  return <GalleryWeddingContainer token={tokenData} />;
}
