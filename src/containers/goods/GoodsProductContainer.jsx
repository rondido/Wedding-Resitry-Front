import React, { useEffect, useRef, useState } from "react";
//공유 이미지 가져오기
import Share from "@/assets/icons/share.png";
import ShareBox from "@/components/ShareBox";
import styled from "styled-components";
import Box from "@/components/box/Box";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

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
  height: 100%;
  overflow: hidden;
  margin-bottom: 10%;
`;

const CenterTextdiv = styled.div`
  margin-bottom: 1%;
`;

export default function GoodsProductContainer() {
  const [sharebox, setSharebox] = useState(false);
  const [fetchdata, SetFetchData] = useState([]);
  const slideRef = useRef(null);

  const TOTAL_SLIDES = 1;

  useEffect(() => {
    fetch("/GoodsProduct/all")
      .then((res) => res.json())
      .then((data) => {
        SetFetchData(data);
      });
  }, []);
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
        <div>
          <GoodsText
            placeholder="신부 이름"
            style={{
              marginBottom: "20px",
            }}
          />
          <br />
          <GoodsText placeholder="신랑 이름" />
        </div>
        <GoodsWeddingdiv>
          <GoodsWeddingadress
            placeholder="예식장 주소"
            style={{
              marginBottom: "20px",
            }}
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
          />
        </GoodsWeddingdiv>
        <CenterTextdiv>
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
                    <Box url={value.usersGoodsImgUrl} />
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
