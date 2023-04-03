import React from "react";
import styled from "styled-components";
import logo from "@/assets/icons/logo.png";
import Person from "@/assets/icons/person.png";
import Menu from "@/assets/icons/menu.png";

const HeaderDiv = styled.header`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) =>
    props.isBoolean ? "" : "1px solid rgba(176,176,176,0.3)"};
`;

const HeaderLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 76px;
  height: 54px;
`;

const PersonLogo = styled.img`
  width: 31px;
  height: 31px;
`;
const HamberLogo = styled.img`
  width: 31px;
  height: 31px;
`;

const RightLogo = styled.div`
  position: absolute;
  top: 1;
  right: 0;
  margin-right: 5rem;
`;

export default function Header({ border }) {
  return (
    <>
      <HeaderDiv isBoolean={border}>
        <HeaderLogoDiv>
          <div>
            <Logo src={logo} />
          </div>
          <RightLogo>
            <PersonLogo src={Person} style={{ marginRight: "1vw" }} />
            <HamberLogo src={Menu} />
          </RightLogo>
        </HeaderLogoDiv>
      </HeaderDiv>
    </>
  );
}
