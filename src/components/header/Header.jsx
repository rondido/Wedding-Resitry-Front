import React, { useState } from "react";
import styled from "styled-components";
import logo from "@/assets/icons/logo.png";
import Person from "@/assets/icons/person.png";
import Menu from "@/assets/icons/menu.png";
import Navbar from "../navbar/Navbar";
import { Link } from 'react-router-dom';

const HeaderDiv = styled.header`
  height: 7vh;
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
  //여기서 navbar api 호출해서 넘겨주면 독립적으로 테스트를 할 수 있다.
  const [navbar, setNavbar] = useState(false);


  return (
    <>
      <HeaderDiv isBoolean={border}>
        <HeaderLogoDiv>
          <div>
            <Link to="/">
              <Logo src={logo}/>
            </Link>
          </div>
          <RightLogo>
            <Link to="/signin">
              <PersonLogo src={Person} style={{ marginRight: "1vw" }}/>
            </Link>
            <HamberLogo
              src={Menu}
              onClick={() => {
                setNavbar(!navbar);
              }}
            />
          </RightLogo>
        </HeaderLogoDiv>
      </HeaderDiv>
      {navbar ? <Navbar /> : null}
    </>
  );
}
