import React from "react";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  justify-content: center;
  height: 94.8vh;
  align-items: center;
  margin-left: 10%;
`;

const Centerdiv = styled.div`
  border: 1px solid #000000;
  width: 339px;
  height: 508px;
  border-radius: 230px;
`;

const ZolabayoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 50%;
  margin-right: 1rem;
`;

const ZolabayoText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  text-align: right;
`;

const ZolabayoMemoText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.8);
  text-align: right;
  margin-top: 1rem;
`;

const Weddingdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  margin-left: 1rem;
`;

const WeddingText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
`;
const WeddingMemoText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 1rem;
`;

export default function MainContainer() {
  return (
    <>
      <Base>
        <ZolabayoDiv>
          <ZolabayoText>ZOLABAYO</ZolabayoText>
          <ZolabayoMemoText>
            ZOLABAYO의 Wedding Registry 서비스로
            <br />
            새로운 인생을 시작하는 신혼부부에게
            <br />
            축복을 선물 해보세요.
          </ZolabayoMemoText>
        </ZolabayoDiv>
        <Centerdiv></Centerdiv>
        <Weddingdiv>
          <WeddingText>Wedding Registry</WeddingText>
          <WeddingMemoText>
            축의금 대신 결혼선물로 신혼부부를 축하하는 서비스입니다. <br />
            신혼부부가 원하는 선물을 직접 축하의미를 담아 선물 할 수 있습니다.
          </WeddingMemoText>
        </Weddingdiv>
      </Base>
    </>
  );
}
