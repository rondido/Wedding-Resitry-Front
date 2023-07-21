import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

//공유 이미지 가져오기
import Share from "@/assets/icons/share.png";
import ShareBox from "@/components/ShareBox";
import styled from "styled-components";
import Box from "@/components/box/Box";

import {
  addHusbandAccount,
  addHusbandName,
  addWeddingHallLocation,
  addWeddingHallTime,
  addWifeAccount,
  addWifeName,
  getGoodsProductApi,
} from "../../apis/Api";
import GoodsModal from "../../components/goodsmodal/GoodsModal";
import { getWeddingHall } from "../../apis/Api";

const GoodsText = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100px;
  margin-bottom: 5px;
  text-align: center;
  background-color: transparent;
`;

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

const GoodsSharelink = styled.span`
  font-size: 20px;
  font-weight: 400px;
  font-size: 14px;
  line-height: 25px;
`;

const GoodsShareLinkdiv = styled.div`
  width: 100%;
  text-align: right;
  margin-right: 8%;
  height: 6rem;
`;

const GoodsWeddingdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-right: 8%;
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
  justify-content: center;
  align-items: center;

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
  background-color: ${(props) => (props ? "" : `#ebebeb`)};
  border-radius: 15px;
  transform: rotate(180deg);
  margin-right: 8px;
`;

const StyledRange = styled.div`
  display: flex;
  width: 100%;
  height: ${({ width }) => `${width}%`};
  background: linear-gradient(to right, blue, blue);
`;

const ValueItem = styled.div`
  width: 120px;
  display: inline-block;
  font-style: normal;
  font-weight: 400px;
  font-size: 14px;
  line-height: 17px;
`;

const BoxSlider = styled.div`
  width: 100%;
  height: 50%;
  overflow-x: hidden;
  margin-bottom: 10%;
`;

const CenterTextdiv = styled.div`
  margin-bottom: 1%;
  position: relative;
  width: 450px;
  height: 130px;
`;

const AddMarriedButton = styled.button`
  border: none;
  background: none;
`;

const AddMarriedButtonDiv = styled.div`
  position: absolute;
  top: 0;
  margin-top: 65px;
  right: 0;
`;

export default function GoodsProductContainer({ token }) {
  const [sharebox, setSharebox] = useState(false);
  const [didmount, setDidmount] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [wifeNameText, setWifeNameText] = useState("");
  const [husbandNameText, setHusbandNameText] = useState("");
  const [addressText, setAddressText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [dateText, setDateText] = useState("");
  const [timeText, setTimeText] = useState("");
  const [isEditing, setIsEditing] = useState({
    husband: false,
    wife: false,
    wifeBank: false,
    husbandBank: false,
    wifeAccount: false,
    husbandAccount: false,
  });
  const [wifeBankText, setWifeBankText] = useState("");
  const [wifeAccountText, setWifeAccountText] = useState("");
  const [husbandBankText, setHusbandBankText] = useState("");

  const [husbandAccountText, setHusBandAccountText] = useState("");
  const [marriedWeddingData, setMarriedWeddingData] = useState([]);
  const [isOpen, setIsOpen] = useState({
    result: false,
    state: "Edit",
    userGoodsId: "",
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  //state 상태에 따른 비동기 통신중 fetchdata의 값이 undefined일때 상태를 고려한 code
  const arrayLength = fetchData ? fetchData.length : 0;
  const TOTAL_SLIDES = 1;
  const FIX_SIZE = 10;
  const slideRef = useRef(null);

  //상품전체조회
  async function renderProduct(token) {
    const products = await getGoodsProductApi(token);
    setFetchData(products.data);
  }
  //이름 계좌 시간 전체 조회
  async function getWeddingHallRender(token) {
    const weddingHallData = await getWeddingHall(token);
    setMarriedWeddingData(weddingHallData);
  }
  //남편 이름 등록
  async function addHusbandNameRender(token, name) {
    await addHusbandName(token, name);
    getWeddingHall(token);
  }
  // 신부 이름 등록
  async function addWifeNameRender(token, name) {
    await addWifeName(token, name);
    getWeddingHall(token);
  }

  // 신부 계좌,은행 등록
  async function addWifeAccountRender(token, account, bank) {
    await addWifeAccount(token, account, bank);
    getWeddingHall(token);
  }
  // 신랑 계좌,은행 등록
  async function addHusbandAccountRender(token, account, bank) {
    await addHusbandAccount(token, account, bank);
    getWeddingHall(token);
  }
  //예식장 주소 및 날짜 변경
  async function addWeddingHallLocationRender(token, address) {
    await addWeddingHallLocation(token, address);

    await getWeddingHall(token);
  }
  // 예식 시간
  async function addWeddingHallTimeRender(token, locationText) {
    if (locationText !== "") {
      const [year, time] = locationText.split("T");
      const yyyymmdd = year.split("-").join("");
      const hhmm = time.split(":").join("");
      const data = await addWeddingHallTime(token, yyyymmdd, hhmm);
      setDateText(data.data?.weddingDate);
      setTimeText(data.data?.weddingTime);
      getWeddingHall(token);
    }

    await getWeddingHall(token);
  }
  // 신부 이름 text
  const wifeTextChange = (e) => {
    const value = e.target.value;
    if (isEditing.wife) {
      setWifeNameText(value);
    }
    setWifeNameText(value);
  };
  // 신랑 이름 text
  const husbandTextChange = (e) => {
    const value = e.target.value;
    setHusbandNameText(value);
  };
  // 신부 은행 Change 이벤트
  const wifBankTextChange = (e) => {
    const value = e.target.value;
    setWifeBankText(value);
  };
  // 신부 계좌번호 Change 이벤트
  const wifeAccountTextChange = (e) => {
    const value = e.target.value;
    setWifeAccountText(value);
  };
  // 신랑 은행 Change 이벤트
  const hasbandBankTextChange = (e) => {
    const value = e.target.value;
    setHusbandBankText(value);
  };
  // 신랑 계좌번호 Change 이벤트
  const husbandAccountTextChange = (e) => {
    const value = e.target.value;
    setHusBandAccountText(value);
  };
  // 결혼식 주소 Change 이벤트
  const addressChange = (e) => {
    const value = e.target.value;
    setAddressText(value);
    addWeddingHallLocationRender(token, addressText);
  };
  // 결혼식 날짜 Change 이벤트
  const dateTimeChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setLocationText(value);

    addWeddingHallTimeRender(token, locationText);
  };
  //이름 계좌 시간 전체 등록 버튼
  const addMarriedInformationClick = async (token) => {
    //신랑 이름 등록
    await addHusbandNameRender(token, husbandNameText);
    //신부 이름 등록
    await addWifeNameRender(token, wifeNameText);
    //신부 계좌 등록
    const data1 = await addWifeAccountRender(
      token,
      wifeAccountText,
      wifeBankText
    );
    console.log(data1);
    //신랑 계좌 등록
    await addHusbandAccountRender(token, husbandAccountText, husbandBankText);
  };

  useEffect(() => {
    setDidmount(true);
  }, []);

  useEffect(() => {
    if (didmount) {
      renderProduct(token);
      getWeddingHallRender(token);
    }
  }, [didmount]);

  useEffect(() => {
    if (!isOpen) {
      renderProduct(token);
    }
  }, [isOpen]);

  const GoodsElementList = () => {
    let element = [];
    for (let i = 0; i < FIX_SIZE - arrayLength; i++) {
      element.push(
        <BoxItem
          style={{ width: "100%", marginRight: "150px" }}
          onClick={() => {
            setIsOpen({ result: true, state: "Edit", userGoodsId: "" });
          }}
          key={i}
        >
          <Box />
          <ItemDiv></ItemDiv>
        </BoxItem>
      );
    }
    return element;
  };

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

  function marriedWeddingWifeUpdateHanlder() {
    const marriedWeddingWifeAccountData = marriedWeddingData.data?.account[1];
    setWifeNameText(marriedWeddingWifeAccountData?.name);
    setWifeBankText(marriedWeddingWifeAccountData?.bank);
    setWifeAccountText(marriedWeddingWifeAccountData?.account);
  }

  function marriedWeddingHusbandUpdateHanlder() {
    const marriedWeddingHusbandAccountData =
      marriedWeddingData.data?.account[0];
    setHusbandNameText(marriedWeddingHusbandAccountData?.name);
    setHusbandBankText(marriedWeddingHusbandAccountData?.bank);
    setHusBandAccountText(marriedWeddingHusbandAccountData?.account);
  }
  function marriedWeddingTimeHandler() {
    const weddingDate = marriedWeddingData.data?.weddingDate;
    const weddingTime = marriedWeddingData.data?.weddingTime;
    setDateText(weddingDate);
    setTimeText(weddingTime);
  }

  function marriedAddresStateHandler() {
    const marriedWeddingLocation = marriedWeddingData.data?.location;
    setAddressText(marriedWeddingLocation);
  }
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  useEffect(() => {
    marriedWeddingWifeUpdateHanlder();
    marriedWeddingHusbandUpdateHanlder();
    marriedAddresStateHandler();
    marriedWeddingTimeHandler();
  }, [marriedWeddingData]);

  return (
    <>
      <GoodsContainer>
        <GoodsShareLinkdiv>
          <GoodsSharelink
            onClick={() => {
              setSharebox(!sharebox);
            }}
          >
            <img
              src={Share}
              style={{
                width: "12px",
                marginTop: "20px",
              }}
            />
            링크 공유하기
          </GoodsSharelink>
          <div>{sharebox ? <ShareBox /> : null}</div>
        </GoodsShareLinkdiv>
        {marriedWeddingData.data && (
          <>
            <div>
              <GoodsText
                placeholder="신부이름"
                style={{
                  marginBottom: "20px",
                }}
                onChange={(e) => {
                  wifeTextChange(e);
                  setIsEditing({ wife: true });
                }}
                defaultValue={wifeNameText}
              />
              <br />
              <GoodsText
                placeholder="신랑 이름"
                onChange={(e) => husbandTextChange(e)}
                defaultValue={husbandNameText}
              />
            </div>
            <GoodsWeddingdiv>
              <GoodsWeddingadress
                placeholder="예식장 주소"
                style={{
                  marginBottom: "20px",
                }}
                onChange={(e) => addressChange(e)}
                defaultValue={addressText || ""}
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
                onChange={(e) => dateTimeChange(e)}
                value={dateText + "T" + timeText}
              />
            </GoodsWeddingdiv>
            <CenterTextdiv>
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                <GoodsWeddingText
                  placeholder="신부 이름"
                  defaultValue={wifeNameText || ""}
                />
                <GoodsWeddingbank
                  placeholder="은행"
                  onChange={(e) => wifBankTextChange(e)}
                  name="wifeBank"
                  defaultValue={wifeBankText}
                />
                <GoodsWeddingaccountnumber
                  placeholder="계좌번호"
                  onChange={(e) => wifeAccountTextChange(e)}
                  name="wifeAccount"
                  defaultValue={wifeAccountText}
                />
              </div>
              <br />
              <div>
                <GoodsWeddingText
                  placeholder="신랑 이름"
                  defaultValue={husbandNameText}
                />
                <GoodsWeddingbank
                  placeholder="은행"
                  name="husbandBank"
                  onChange={(e) => hasbandBankTextChange(e)}
                  defaultValue={husbandAccountText}
                />
                <GoodsWeddingaccountnumber
                  placeholder="계좌번호"
                  onChange={(e) => husbandAccountTextChange(e)}
                  name="husbandAccount"
                  defaultValue={husbandAccountText}
                />
                <AddMarriedButtonDiv>
                  <AddMarriedButton
                    onClick={() => addMarriedInformationClick(token)}
                  >
                    저장하기
                  </AddMarriedButton>
                </AddMarriedButtonDiv>
              </div>
            </CenterTextdiv>
          </>
        )}

        <BoxContainer>
          <RiArrowDropLeftLine onClick={prevSlide} size="40" />
          <BoxSlider>
            <BoxWapper ref={slideRef}>
              <>
                {fetchData &&
                  fetchData.map((value, idx) => (
                    <BoxItem
                      key={idx}
                      onClick={() => {
                        setIsOpen({
                          result: true,
                          state: "View",
                          userGoodsId: value.usersGoodsId,
                        });
                      }}
                    >
                      <Box
                        url={value.usersGoodsImgUrl}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                        setFetchData={setFetchData}
                        fetchData={fetchData}
                        token={token}
                      />
                      <ItemDiv>
                        <StyledTrack isTrue={false}>
                          <StyledRange width={value.usersGoodsPercent} />
                        </StyledTrack>
                        <ValueItem>
                          <div>
                            <p>{value.usersGoodsName}</p>
                          </div>
                          <div>
                            <p>{value.usersGoodsPrice} 원</p>
                          </div>
                          <div>
                            <p style={{ marginTop: "50px" }}>
                              {value.usersGoodsTotalDonation}원 후원
                            </p>
                          </div>
                        </ValueItem>
                      </ItemDiv>
                    </BoxItem>
                  ))}
                {GoodsElementList()}
              </>
            </BoxWapper>
          </BoxSlider>
          {isOpen.result ? (
            <GoodsModal
              setIsOpen={setIsOpen}
              token={token}
              fetchData={fetchData}
              setFetchData={setFetchData}
              isOpen={isOpen}
            />
          ) : (
            <></>
          )}
          <RiArrowDropRightLine onClick={nextSlide} size="40" />
        </BoxContainer>
      </GoodsContainer>
    </>
  );
}
