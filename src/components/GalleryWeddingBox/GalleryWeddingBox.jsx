import React, { useState } from "react";
import styled from "styled-components";

import GalleryWeddingimageBox from "../galleryWedingImageBox/GalleryWeddingimageBox";
import { getAccessToken } from "../../tokens/token";

const Base = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #929292;
  display: flex;
  justify-content: center;
  background-color: #929292;
  position: relative;
  margin: 0 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  background: ${(props) => `url(${props.src}) no-repeat center`};
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export default function GalleryWeddingBox({ url }) {
  const token = getAccessToken();
  const [isOpen, setIsOpen] = useState(false);

  const getIsTrued = (data) => {
    setIsOpen(data);
  };

  return (
    <>
      <Base onClick={() => (url ? <></> : setIsOpen(true))}>
        {isOpen ? (
          <GalleryWeddingimageBox getIsTrued={getIsTrued} token={token} />
        ) : null}
        {url ? <Image src={url} /> : <></>}
      </Base>
    </>
  );
}
