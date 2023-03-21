import React from 'react';
//import {RiArrowDropLeftLine,RiArrowDropRightLine} from 'react-icons/ri';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import {EffectCoverflow, Navigation } from 'swiper';

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import GalleryWeddingBox from '../components/GalleryWeddingBox/GalleryWeddingBox';


const banners = [
  1,2,3,4,5,6
];



export default function GalleryWedding() {  
  return (
    <>
      <Swiper
        effect={'coverflow'}
        slidesPerView={3} // 동시에 보여줄 슬라이드 갯수
        //spaceBetween={50}// 슬라이드간 간격
        //slidesPerGroup={2} //그룹으로 묶을 수
        //initialSlide={2} //보여줄 index
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el:'.swiper-pagination'          
        }}        
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1.5,
          slideShadows : false,
        }}
        modules={[ Navigation,EffectCoverflow]}
        className='swiper-container two'
        grabCursor={true}
        
    
      >
    
      {
        banners.map((value,idx)=>(
          <SwiperSlide key={idx}>
            <GalleryWeddingBox className="swiper-image"/>
          </SwiperSlide>
        ))
      }
      </Swiper>    
  
  </>
  )
}
