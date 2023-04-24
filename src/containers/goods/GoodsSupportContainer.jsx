import React, { useEffect, useRef, useState } from "react";
//공유 이미지 가져오기
import styled from "styled-components";
import Box from "@/components/box/Box";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { getGoodsProductApi } from "../../constants/Api";

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

function CheckBoxOne() {
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("test");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };
  return (
    <WeddingYn>
      <div>
        <p>결혼식 참석 여부를 알려주세요.</p>
        <input
          type="checkbox"
          name="test"
          value="참석"
          onChange={(e) => checkOnlyOne(e.target)}
          style={{ marginTop: "10px" }}
        />
        참석
        <br />
        <input
          type="checkbox"
          name="test"
          value="불참석"
          onChange={(e) => checkOnlyOne(e.target)}
          style={{ marginTop: "10px" }}
        />
        불참석
        <br />
        <input
          type="checkbox"
          name="test"
          value="미정"
          onChange={(e) => checkOnlyOne(e.target)}
          style={{ marginTop: "10px" }}
        />
        미정
        <br />
      </div>
    </WeddingYn>
  );
}

export default function GoodsSupportContainer() {
  const [fetchdata, SetFetchData] = useState([]);
  const [didMount, setDidMount] = useState(false);
  const slideRef = useRef(null);

  const TOTAL_SLIDES = 1;

  async function renderProduct() {
    const products = await getGoodsProductApi();
    SetFetchData(products);
  }
  //Api 2번 호출 막기
  useEffect(() => {
    setDidMount(true);
    return () => {};
  }, []);

  useEffect(() => {
    if (didMount) {
      renderProduct();
    }
  }, [didMount]);

  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <>
      <GoodsContainer>
        <TitleDiv>
          <TitleText>000님과 000을 결혼 축하 드립니다.</TitleText>
        </TitleDiv>
        <CenterTextdiv>
          {CheckBoxOne()}
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <GoodsWeddingText placeholder="신부 이름" />
            <GoodsWeddingbank placeholder="은행" />
            <GoodsWeddingaccountnumber placeholder="계좌번호" />
          </div>
          <br />
          <div>
            <GoodsWeddingText placeholder="신랑 이름" />
            <GoodsWeddingbank placeholder="은행" />
            <GoodsWeddingaccountnumber placeholder="계좌번호" />
          </div>
        </CenterTextdiv>
        <BoxContainer>
          <RiArrowDropLeftLine onClick={prevSlide} size="40" />
          <BoxSlider>
            <BoxWapper ref={slideRef}>
              {fetchdata.data &&
                fetchdata.data.map((value, idx) => (
                  <BoxItem key={idx}>
                    {/* url={value.usersGoodsImgUrl}  */}
                    <Box />
                    <ItemDiv>
                      <StyledTrack>
                        <StyledRange width={value.usersGoodsPercent} />
                      </StyledTrack>
                      <ValueItem>
                        <div>
                          <p>{value.usersGoodsName}</p>
                        </div>
                        <div>
                          <p>{value.usersGoodsPrice}원</p>
                        </div>
                        <div>
                          <p>{value.totalDonation}원 후원</p>
                        </div>
                      </ValueItem>
                    </ItemDiv>
                  </BoxItem>
                ))}
            </BoxWapper>
          </BoxSlider>
          <RiArrowDropRightLine onClick={nextSlide} size="40" />
        </BoxContainer>
      </GoodsContainer>
    </>
  );
}
