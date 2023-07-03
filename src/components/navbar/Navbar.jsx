import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineFileSync,
  AiOutlinePicture,
} from "react-icons/ai";
import {
  BsCalendar2Heart,
  BsPersonGear,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { hasAccessToken, removeAccessToken } from "../../tokens/token";
import { headerNavbarApi } from "../../apis/Api";

import useTokenDecode from "../../hooks/useTokenDecode";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 250px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px;
  z-index: 100;
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
  font-size: 18px;
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
  margin-left: 5px;
`;

const TopItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5px;
  height: 210px;
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
  margin-left: 5px;
`;

const BottomItemDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
  align-items: center;
`;

const AlarmDiv = styled.div`
  width: 95%;
  font-weight: 400;
  font-size: 15px;
  line-height: 27px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 80px;
  margin-left: 5px;
`;
const AlarmAttendText = styled.p`
  margin-left: 5px;
  :after {
    content: "";
    opacity: 0.3;
    width: 20px;
    border: 1px solid #000000;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 13px;
  }
`;

const AlarmDonationText = styled.p`
  margin-left: 5px;
  :after {
    content: "";
    opacity: 0.3;
    width: 20px;
    border: 1px solid #000000;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 13px;
  }
`;

const LinkInput = styled(Link)`
  text-decoration: none;
  width: 240px;
  color: black;
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
  position: relative;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #b5acac;
  }
`;

const LogButton = styled.button`
  border: none;
  background-color: transparent;
`;

function NotificationItemList({ notifications }) {
  if (notifications === undefined || notifications === null) {
    return <></>;
  }
  if (notifications.length === 0) {
    return <></>;
  }
  return notifications.all.map((value, index) => (
    <NotificationItem data={value} key={index} />
  ));
}

function NotificationItem({ data }) {
  //return 렌더링
  //선언부
  //혹시 이유는??
  if (data === null || data === undefined) {
    return <></>;
  }
  if (data.type === "attend") {
    return (
      <AlarmDiv>
        <BsFillEnvelopeFill style={{ width: "21px", height: "21px" }} />
        {data.type ? (
          <AlarmAttendText>
            {data.name}님이 결혼식 참석에 체크하셨습니다.
          </AlarmAttendText>
        ) : (
          <AlarmAttendText>
            {data.name}님이 결혼식 불참석에 체크하셨습니다.
          </AlarmAttendText>
        )}
      </AlarmDiv>
    );
  }
  return (
    <AlarmDiv>
      <CiMoneyBill style={{ width: "21px", height: "21px" }} />
      <AlarmDonationText>
        {data.name}님이 {data.goods}에 {data.donation}원을 후원하셨습니다.
      </AlarmDonationText>
    </AlarmDiv>
  );
}

function TokenStateLink({ token, setNavbar }) {
  const navbarClose = () => {
    if (token === null || token === undefined || token === false) {
      alert("로그인 정보가 올바르지 못합니다.");
      setNavbar(false);
      return;
    }
    setNavbar(false);
  };

  if (token === null || token === undefined || token === false) {
    return (
      <TopItem>
        <TopTitleText>카테고리</TopTitleText>
        <LinkInput onClick={navbarClose}>
          <AiOutlineShoppingCart
            style={{ marginRight: "5px", marginLeft: "3px" }}
          />
          상품 리스트
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
        <LinkInput onClick={navbarClose}>
          <AiOutlineFileSync
            style={{ marginRight: "5px", marginLeft: "3px" }}
          />
          관리 페이지
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
        <LinkInput onClick={navbarClose}>
          <AiOutlinePicture style={{ marginRight: "5px", marginLeft: "3px" }} />
          갤러리 페이지
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
        <LinkInput onClick={navbarClose}>
          <BsCalendar2Heart style={{ marginRight: "5px", marginLeft: "3px" }} />
          위시 리스트/메모장
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
      </TopItem>
    );
  } else {
    return (
      <TopItem>
        <TopTitleText>카테고리</TopTitleText>
        <LinkInput to="/GoodsProduct" onClick={navbarClose}>
          <AiOutlineShoppingCart
            style={{ marginRight: "5px", marginLeft: "3px" }}
          />
          상품 리스트
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
        <LinkInput to="/admin/main" onClick={navbarClose}>
          <AiOutlineFileSync
            style={{ marginRight: "5px", marginLeft: "3px" }}
          />
          관리 페이지
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
        <LinkInput to="/GalleryWedding" onClick={navbarClose}>
          <AiOutlinePicture style={{ marginRight: "5px", marginLeft: "3px" }} />
          갤러리 페이지
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
        <LinkInput to="/admin/memo" onClick={navbarClose}>
          <BsCalendar2Heart style={{ marginRight: "5px", marginLeft: "3px" }} />
          위시 리스트/메모장
          <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
        </LinkInput>
      </TopItem>
    );
  }
}

export default function Navbar({ setNavbar, token }) {
  const [navbarNotification, setNavbarNotification] = useState([]);
  const [_, nickName] = useTokenDecode(token);
  console.log(_);
  const useLinkToken = token;

  const navigator = useNavigate();

  async function getNavibarNotificationRender(token) {
    const navbarItemData = await headerNavbarApi(token);
    setNavbarNotification(navbarItemData.data);
  }

  useEffect(() => {
    getNavibarNotificationRender(token);
  }, []);

  const removeAcctokenRender = () => {
    const tokenStatus = hasAccessToken();
    if (tokenStatus) {
      removeAccessToken();
      navigator("/");
      setNavbar(false);
      return;
    }
    if (!tokenStatus) {
      navigator("/");
      setNavbar(false);
      alert("로그인정보가 존재하지 않습니다.");
      return;
    }
  };
  return (
    <>
      <Base>
        <Title>ZOLABAYO</Title>
        <NickNamediv>
          <NickNameText>
            <BsPersonGear
              style={{ width: "25px", height: "27px", marginRight: "5px" }}
            />
            {nickName ? (
              <span>{nickName}님을 환영합니다.</span>
            ) : (
              <span>로그인을 진행해주세요.</span>
            )}
          </NickNameText>
        </NickNamediv>
        <TokenStateLink token={useLinkToken} />
        <CenterItemDiv>
          <div>
            <CenterItemTitle>알림 목록</CenterItemTitle>
          </div>
          <NotificationItemList
            notifications={navbarNotification}
            setNavbar={setNavbar}
          />
        </CenterItemDiv>
        <BottomItemDiv>
          <span style={{ fontSize: "13px" }}>링크 공유하기</span>
          <LogButton onClick={() => removeAcctokenRender()}>Log out</LogButton>
        </BottomItemDiv>
      </Base>
    </>
  );
}
