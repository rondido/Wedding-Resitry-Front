import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import {
  deleteGalleryWeddingImage,
  getGalleryWeddingImage,
} from "../../apis/Api";

import GalleryWeddingimageBox from "../galleryWedingImageBox/GalleryWeddingimageBox";

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

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  right: 0%;
  bottom: 0%;
`;

export default function GalleryWeddingBox() {
  const [imageData, setImageData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function getImageDataRender() {
    const data = await getGalleryWeddingImage();
    setImageData(data);
  }
  useEffect(() => {
    getImageDataRender();
  }, []);

  const getIsTrued = (data) => {
    setIsOpen(data);
  };
  const getIsImageData = (data) => {
    setImageData(data);
  };

  const deleteImageOnClick = (data) => {
    console.log(data);
    deleteGalleryWeddingImage(data);
  };

  return (
    <>
      <Base onClick={() => setIsOpen(true)}>
        {isOpen ? (
          <GalleryWeddingimageBox
            getIsTrued={getIsTrued}
            getIsImageData={getIsImageData}
          />
        ) : null}
        {imageData.data &&
          Object.values(imageData.data).map((v) => (
            <div key={v.galleryImgId}>
              <Image src={v.galleryImgUrl} />
              <AiOutlineClose
                style={{
                  zIndex: "1",
                  position: "absolute",
                  top: "10",
                  right: "10",
                }}
                onClick={() => deleteImageOnClick(v.galleryImgId)}
              />
            </div>
          ))}
      </Base>
    </>
  );
}
