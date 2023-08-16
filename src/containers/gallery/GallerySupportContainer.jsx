import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import styled from "styled-components";

import { galleryWeddingImageState } from "../../state/galleryWeddingImageState.js";
import { useRecoilState } from "recoil";
import GalleryWeddingBox from "../../components/GalleryWeddingBox/GalleryWeddingBox.jsx";
import {
  getGallerySupportImage,
  getGallerySupportUUID,
} from "../../apis/Api.js";
import { useLocation } from "react-router";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/styles.css";

const Base = styled.div`
  height: 92vh;
`;

export default function GallerySupportContainer({ token }) {
  const [imgData, setImgData] = useRecoilState(galleryWeddingImageState);
  const [invitationStatus, setInvitationStatus] = useState(true);

  const [didMount, setDidMount] = useState(false);

  const location = useLocation();

  const arrayLength = imgData ? imgData.length : 0;
  const FIX_SIZE = 6;
  const [_, GallerySupport, uuid1, uuid2] = location.pathname.trim().split("/");
  console.log(_, GallerySupport);
  const GallyElementList = () => {
    let element = [];
    for (let i = 0; i < FIX_SIZE - arrayLength; i++) {
      element.push(
        <SwiperSlide key={i}>
          <GalleryWeddingBox key={i} className="swiper-image" />
        </SwiperSlide>
      );
    }
    return element;
  };
  async function getImageDataRender(token) {
    const getImage = await getGallerySupportImage(token);
    if (getImage.success === false) {
      const postStatus = await getGallerySupportUUID(token, uuid1, uuid2);
      localStorage.setItem("Guest-Info", Object.values(postStatus.data));
      const getLocalGeustInfo = localStorage.getItem("Guest-Info");
      if (getLocalGeustInfo) {
        const guestImgData = await getGallerySupportImage(
          token,
          getLocalGeustInfo
        );
        setImgData(guestImgData.data);
      }
    } else {
      setImgData(getImage.data);
    }
  }
  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) {
      getImageDataRender(token);
    }
  }, [didMount]);

  return (
    <Base>
      <Swiper
        effect={"coverflow"}
        slidesPerView={3} // 동시에 보여줄 슬라이드 갯수
        //spaceBetween={50}// 슬라이드간 간격
        //slidesPerGroup={2} //그룹으로 묶을 수
        //initialSlide={2} //보여줄 index
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[Navigation, EffectCoverflow]}
        className="swiper-container two"
        grabCursor={true}
      >
        {imgData &&
          imgData.map((v) => (
            <SwiperSlide key={v.galleryImgId}>
              <GalleryWeddingBox
                className="swiper-image"
                url={v.galleryImgUrl}
                setInvitationStatus={setInvitationStatus}
                invitationStatus={invitationStatus}
              />
            </SwiperSlide>
          ))}
        {GallyElementList()}
      </Swiper>
    </Base>
  );
}
