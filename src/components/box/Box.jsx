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
  return (
    <>
      <Boxcontainer>
        <Divbox>
          <Plusimg>
            {url ? (
              <img
                src={url}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            ) : (
              <img src={Plus} style={{ width: "20px", height: "20px" }} />
            )}
          </Plusimg>
        </Divbox>
      </Boxcontainer>
    </>
  );
}
