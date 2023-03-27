import React from "react";
import Plus from "@/assets/icons/plus.png";
import styled from "styled-components";

const Divbox = styled.div`
  background-color: #d9d9d9;
  width: 228px;
  height: 295px;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
`;

const Plusimg = styled.div`
  margin: auto;
`;

const Boxcontainer = styled.div`
  display: flex;
  margin-right: 6px;
`;

export default function Box({ url }) {
  //상품등록 modal open
  const modalopen = () => {
    alert("상품 등록 modal 띄울 예정");
  };

  return (
    <>
      <Boxcontainer>
        {url.length === 0 ? <p>Edit</p> : null}

        <Divbox onClick={modalopen}>
          <Plusimg>
            {url.length === 0 ? (
              <img src={Plus} style={{ width: "20px", height: "20px" }} />
            ) : (
              <img
                src={url}
                style={{ objectFit: "none", width: "100%", height: "100%" }}
              />
            )}
          </Plusimg>
        </Divbox>
      </Boxcontainer>
    </>
  );
}
