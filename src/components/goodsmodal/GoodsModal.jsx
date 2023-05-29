import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import logo from "@/assets/icons/logo.png";
import { postGoodsProductApi, deleteGoodsAdd } from "../../apis/Api";

const Base = styled.div`
  background: rgba(228, 230, 232, 0.7);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 643px;
  height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 40px;
  width: 621px;
  height: 242px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Logo = styled.img`
  margin-top: 5px;
  width: 40px;
  height: 28px;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.input`
  width: 479px;
  height: 29px;
  background: #eeeeee;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 10px;
`;

const GoodsNameInput = styled.input`
  border: none;
  background: rgba(228, 230, 232, 0.7);
  outline: none;
  width: 400px;
  height: 20px;
`;

const GoodsDonationInput = styled.input`
  border: none;
  background: rgba(228, 230, 232, 0.7);
  outline: none;
  width: 100px;
  height: 20px;
`;

const GoodsDonationDiv = styled.div`
  margin-top: 10px;
`;

const ApiButton = styled.button`
  border: none;
  background: none;
`;

const OkorColsebuttonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const GoodsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 479px;
`;

const GoodsImage = styled.div`
  background-color: blue;
  width: 135px;
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.url};
  margin-bottom: 10px;
`;

const GoodsText = styled.p`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export default function GoodsModal(props) {
  const [data, setData] = useState([]);
  const [getGoodsUrlItem, setGetGoodsUrlItem] = useState("");
  async function postGoodsList() {
    const goodsItems = await postGoodsProductApi(getGoodsUrlItem);
    setData(goodsItems);
  }

  const getGoodsUrl = (e) => {
    setGetGoodsUrlItem(e.target.value);
  };

  const okButton = () => {
    props.setIsOpen(false);
  };

  const deleteButton = () => {
    deleteGoodsAdd();
    props.setIsOpen(false);
  };

  return (
    <Base>
      <Container>
        <TextDiv>
          {data.data && data.data ? null : <Logo src={logo} />}
          <AiOutlineClose
            style={{
              marginLeft: "auto",
              position: "absolute",
              top: "10%",
              right: "5%",
            }}
            onClick={() => {
              props.setIsOpen(false);
            }}
          />
          {data.data && data.data ? (
            Object.values(data).map((key, value) => (
              <>
                <GoodsDiv key={value}>
                  <GoodsImage url={key.usersGoodsImgUrl} />
                  <GoodsText>상품 이름 : {key.usersGoodsName}</GoodsText>
                  <GoodsDonationDiv>
                    <GoodsText>
                      후&nbsp; 원 &nbsp; 가 : {key.usersGoodsPrice}원
                    </GoodsText>
                  </GoodsDonationDiv>
                </GoodsDiv>
              </>
            ))
          ) : (
            <>
              <Text onChange={getGoodsUrl} />
              <div>
                <p>
                  상품 이름 : <GoodsNameInput />
                </p>
                <GoodsDonationDiv>
                  <p>
                    후&nbsp; 원 &nbsp; 가 : <GoodsDonationInput />원
                  </p>
                </GoodsDonationDiv>
              </div>
            </>
          )}

          <div style={{ width: "100%" }}>
            <OkorColsebuttonDiv>
              {props.setModalState ? (
                <>
                  <ApiButton onClick={postGoodsList}>수정하기</ApiButton> |
                  <ApiButton>삭제하기</ApiButton>
                </>
              ) : (
                <>
                  <div>
                    <ApiButton onClick={postGoodsList}>등록하기</ApiButton>
                  </div>
                  <div
                    style={{ position: "absolute", top: "85%", right: "10%" }}
                  >
                    <ApiButton onClick={okButton}>확인</ApiButton>|
                    <ApiButton onClick={deleteButton}>취소</ApiButton>
                  </div>
                </>
              )}
            </OkorColsebuttonDiv>
          </div>
        </TextDiv>
      </Container>
    </Base>
  );
}
