import React, { useEffect, useRef, useState } from "react";
//공유 이미지 가져오기
import styled from "styled-components";
import Box from "@/components/box/Box";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import {
  getGoodsSupportItemsList,
  getInforMationList,
  getWeddingAttendList,
  postWeddingAttendList,
} from "../../apis/Api";

const GoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoodsWeddingText = styled.input`
  outline: none;
  border: none;
  background-color: #ebebeb;
  width: 80px;
  border-radius: 10px 0 0 10px;
  height: 33px;
  text-align: center;
`;

const GoodsWeddingbank = styled.input`
  outline: none;
  border: none;
  background-color: #ebebeb;
  width: 80px;
  height: 33px;
  text-align: center;
  margin-left: 5px;
`;

const GoodsWeddingaccountnumber = styled.input`
  outline: none;
  border: none;
  background-color: #ebebeb;
  width: 200px;
  border-radius: 0 10px 10px 0;
  margin-left: 5px;
  height: 33px;
  text-align: center;
`;

const BoxWapper = styled.div`
  display: flex;
  height: 50vh;
  margin-top: 20px;
  width: 100%;
`;

const BoxContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

const BoxItem = styled.div`
  display: flex;
  &:nth-child(odd) {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:nth-child(even) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 150px;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledTrack = styled.div`
  width: 5px;
  height: 100px;
  background-color: #ebebeb;
  border-radius: 15px;
  transform: rotate(180deg);
  margin-right: 10px;
`;

const StyledRange = styled.div`
  display: flex;
  width: 100%;
  height: ${({ width }) => `${width}%`};
  background: linear-gradient(to right, blue, blue);
`;

const ValueItem = styled.div`
  width: 130px;
  display: inline-block;
  font-style: normal;
  font-weight: 400px;
  font-size: 14px;
  line-height: 17px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BoxSlider = styled.div`
  width: 100%;
  height: 50%;
  overflow-x: hidden;
  margin-bottom: 10%;
`;

const CenterTextdiv = styled.div`
  margin-bottom: 1%;
`;

const WeddingYn = styled.div`
  display: flex;
  position: absolute;
  top: 25%;
  left: 3%;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;
const TitleText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const GoodsWeddingdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-right: 8%;
`;
const GoodsWeddingadress = styled.input`
  outline: none;
  border: none;
  background-color: #ebebeb;
  width: 200px;
  border-radius: 10px;
  margin-left: 5px;
  height: 33px;
  text-align: center;
`;

const GoodsInformationAddressandDateTimeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

//라디오 버튼
function WeddingAttendJudgment({ token }) {
  const guestToken = localStorage.getItem("Guest-Info");
  const [attendData, setAttendData] = useState([]);

  //radiobutton change 값
  const radioWeddingAdttendChange = (e) => {
    const radioButtonValue = e.target.value;
    postWeddingAttnedListRender(token, radioButtonValue, guestToken);
  };
  // 첫페이지 렌더링시 참석 여부 불러오기
  async function getWeddingAttnedListRender(token, guestToken) {
    const getAttendData = await getWeddingAttendList(token, guestToken);
    setAttendData(getAttendData.data?.attend);
  }
  //참석 여부 post
  async function postWeddingAttnedListRender(
    token,
    radioButtonValue,
    guestToken
  ) {
    const postAttendData = await postWeddingAttendList(
      token,
      radioButtonValue,
      guestToken
    );

    console.log(postAttendData);
    setAttendData(postAttendData.data.attend);
  }
  useEffect(() => {
    getWeddingAttnedListRender(token, guestToken);
  }, []);
  return (
    <WeddingYn key={2}>
      <div>
        <p>결혼식 참석 여부를 알려주세요.</p>
        <input
          type="radio"
          name="attend"
          id="yesAttend"
          value="yes"
          checked={attendData === "yes"}
          onChange={radioWeddingAdttendChange}
          style={{ marginTop: "10px" }}
        />
        참석
        <br />
        <input
          type="radio"
          name="attend"
          id="noAttend"
          value="no"
          onChange={radioWeddingAdttendChange}
          checked={attendData === "no"}
          style={{ marginTop: "10px" }}
        />
        불참석
        <br />
        <input
          type="radio"
          name="attend"
          id="unknownAttend"
          value="unknown"
          onChange={radioWeddingAdttendChange}
          checked={attendData === "unknown"}
          style={{ marginTop: "10px" }}
          readOnly
        />
        미정
        <br />
      </div>
    </WeddingYn>
  );
}

function MarriedInforMation({ token }) {
  const guestToken = localStorage.getItem("Guest-Info");
  //신랑 신부 statae
  const [merriedHusbandNameData, setMerriedHusbandNameData] = useState([]);
  const [merriedWifeNameData, setMerriedWifeNameData] = useState([]);
  //도로명주소
  const [addressData, setAdressData] = useState([]);
  const [dateTimeData, setDateTimeData] = useState("");
  //신랑 신부 내용 조회
  async function getInforMationListRender(token, guestToken) {
    const getMerriedInfoMationData = await getInforMationList(
      token,
      guestToken
    );
    const getMrriedInforMationDataHusBand =
      getMerriedInfoMationData.data.account[0];
    setMerriedHusbandNameData(getMrriedInforMationDataHusBand);
    const getMrriedInforMationDataHusWife =
      getMerriedInfoMationData.data.account[1];
    setMerriedWifeNameData(getMrriedInforMationDataHusWife);
    setAdressData(getMerriedInfoMationData.data.location);
    setDateTimeData(
      getMerriedInfoMationData.data.weddingDate +
        "T" +
        getMerriedInfoMationData.data.weddingTime
    );
  }

  useEffect(() => {
    getInforMationListRender(token, guestToken);
  }, []);

  return (
    <>
      <>
        <TitleDiv>
          {merriedHusbandNameData && merriedWifeNameData && (
            <>
              <TitleText>
                {merriedHusbandNameData.name}님과 {merriedWifeNameData.name}
                님의 결혼을 축하합니다.
              </TitleText>
            </>
          )}
        </TitleDiv>
        <GoodsWeddingdiv>
          {addressData && addressData && (
            <GoodsInformationAddressandDateTimeDiv key={addressData}>
              <GoodsWeddingadress
                style={{
                  marginBottom: "20px",
                }}
                disabled={true}
                value={addressData || ""}
              />
              <input
                type="datetime-local"
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  backgroundColor: "#EBEBEB",
                  height: "33px",
                  border: "1px solid #EBEBEB",
                }}
                value={dateTimeData || ""}
                disabled={true}
              />
            </GoodsInformationAddressandDateTimeDiv>
          )}
        </GoodsWeddingdiv>
        <CenterTextdiv>
          <WeddingAttendJudgment token={token} />
          {merriedHusbandNameData && merriedWifeNameData && (
            <div key={merriedWifeNameData}>
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                <GoodsWeddingText
                  disabled={true}
                  value={merriedHusbandNameData.name || ""}
                />
                <GoodsWeddingbank
                  disabled={true}
                  value={merriedHusbandNameData.bank || ""}
                />
                <GoodsWeddingaccountnumber
                  disabled={true}
                  value={merriedHusbandNameData.account || ""}
                />
              </div>
              <br />
              <div>
                <GoodsWeddingText
                  disabled={true}
                  value={merriedWifeNameData.name || ""}
                />
                <GoodsWeddingbank
                  disabled={true}
                  value={merriedWifeNameData.bank || ""}
                />
                <GoodsWeddingaccountnumber
                  disabled={true}
                  value={merriedWifeNameData.account || ""}
                />
              </div>
            </div>
          )}
        </CenterTextdiv>
      </>
    </>
  );
}

export default function GoodsSupportContainer({ token, guestToken }) {
  const [goodsSupportData, setGoodsSupportData] = useState([]);
  const [didMount, setDidMount] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 1;
  const arrayLength = goodsSupportData ? goodsSupportData.length : 0;
  const FIX_SIZE = 10;
  // 상품 조회
  async function getGoodsListRender(token, guestToken) {
    const goodsSupportData = await getGoodsSupportItemsList(token, guestToken);
    setGoodsSupportData(goodsSupportData.data);
  }
  console.log(goodsSupportData);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const goodsElemntList = () => {
    let element = [];
    for (let i = 0; i < FIX_SIZE - arrayLength; i++) {
      element.push(
        <BoxItem style={{ width: "100%", marginRight: "150px" }}>
          <Box />
          <ItemDiv />
        </BoxItem>
      );
    }
    return element;
  };
  //Api 2번 호출 막기
  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) {
      getGoodsListRender(token, guestToken);
    }
  }, [didMount]);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <>
      <GoodsContainer>
        <MarriedInforMation token={token} guestToken={guestToken} />
        <BoxContainer>
          <RiArrowDropLeftLine onClick={prevSlide} size="40" />
          <BoxSlider>
            <BoxWapper ref={slideRef}>
              {goodsSupportData &&
                goodsSupportData.map((value) => (
                  <BoxItem key={value.id}>
                    <Box url={value.usersGoodsImgUrl} />
                    <ItemDiv>
                      <StyledTrack>
                        <StyledRange width={value?.usersGoodsPercent} />
                      </StyledTrack>
                      <ValueItem>
                        <p>{value?.usersGoodsName}</p>
                        <p>{value?.usersGoodsPrice}원</p>
                        <p>{value?.usersGoodsTotalDonation}원 후원</p>
                      </ValueItem>
                    </ItemDiv>
                  </BoxItem>
                ))}
              {goodsElemntList()}
            </BoxWapper>
          </BoxSlider>
          <RiArrowDropRightLine onClick={nextSlide} size="40" />
        </BoxContainer>
      </GoodsContainer>
    </>
  );
}
