import React from "react";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineFileSync,
  AiOutlinePicture,
} from "react-icons/ai";
import { BsCalendar2Heart, BsPersonGear } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 12%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px;
  z-index: 1;
  right: 3%;
  position: absolute;
  background: #eaeaeb;
`;

const Title = styled.p`
  text-align: center;
  margin-top: 7px;
`;

const NickNamediv = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const NickNameText = styled.p`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const TopTitleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  margin-top: 10px;
  color: #1e3f81;
`;

const TopItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5px;
  height: 210px;
`;

const TopItemInput = styled.button`
  width: 210px;
  height: 20px;
  margin-top: 15px;
  border-radius: 20px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  &:hover {
    background: #929292;
  }
`;

const CenterItemDiv = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  height: 461px;
`;
const CenterItemTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 5px;
  color: #1e3f81;
`;

const BottomItemDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export default function Navbar() {
  return (
    <>
      <Base>
        <Title>ZOLABAYO</Title>
        <NickNamediv>
          <NickNameText>
            <BsPersonGear
              style={{ width: "25px", height: "27px", marginRight: "5px" }}
            />
            000님 환영합니다.
          </NickNameText>
        </NickNamediv>
        <TopItem>
          <TopTitleText>카테고리</TopTitleText>
          <TopItemInput>
            <AiOutlineShoppingCart
              style={{ marginRight: "5px", marginLeft: "3px" }}
            />
            상품 리스트
            <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
          </TopItemInput>
          <TopItemInput>
            <AiOutlineFileSync
              style={{ marginRight: "5px", marginLeft: "3px" }}
            />
            관리 페이지
            <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
          </TopItemInput>
          <TopItemInput>
            <AiOutlinePicture
              style={{ marginRight: "5px", marginLeft: "3px" }}
            />
            갤러리 페이지
            <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
          </TopItemInput>
          <TopItemInput>
            <BsCalendar2Heart
              style={{ marginRight: "5px", marginLeft: "3px" }}
            />
            위시 리스트/메모장
            <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
          </TopItemInput>
        </TopItem>
        <CenterItemDiv>
          <div>
            <CenterItemTitle>알림 목록</CenterItemTitle>
          </div>
          <div>알림 목록 리스트</div>
        </CenterItemDiv>
        <BottomItemDiv>
          <p>링크 공유하기</p>
          <p>Log out</p>
        </BottomItemDiv>
      </Base>
    </>
  );
}
