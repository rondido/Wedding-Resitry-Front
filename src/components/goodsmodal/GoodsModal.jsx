import React from "react";
import styled from "styled-components";
import logo from "@/assets/icons/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { postGoodsProductApi } from "../../constants/Api";

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

export default function GoodsModal(props) {
  async function postGoodsList() {
    postGoodsProductApi();
  }
  return (
    <Base>
      <Container>
        <TextDiv>
          <Logo src={logo} />
          <AiOutlineClose
            style={{
              marginLeft: "auto",
            }}
            onClick={() => {
              props.setIsOpen(false);
            }}
          />
          <Text />
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
          <div>
            <p>
              <ApiButton onClick={postGoodsList}>수정하기</ApiButton> |{" "}
              <ApiButton>삭제하기</ApiButton>
            </p>
          </div>
        </TextDiv>
      </Container>
    </Base>
  );
}
