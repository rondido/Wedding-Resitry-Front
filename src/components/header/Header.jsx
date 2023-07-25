import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "@/assets/icons/logo.png";
import Person from "@/assets/icons/person.png";
import Menu from "@/assets/icons/menu.png";
import Navbar from "../navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { getAccessToken } from "../../tokens/token";

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

function TokenStatusLink({ token, setNavbar, navbar }) {
  if (token === null || token === undefined || token === false) {
    return (
      <RightLogo>
        <Link to="/signin" onClick={() => setNavbar(false)}>
          <PersonLogo src={Person} style={{ marginRight: "1vw" }} />
        </Link>
        <HamberLogo
          src={Menu}
          onClick={() => {
            setNavbar(!navbar);
          }}
        />
      </RightLogo>
    );
  } else {
    return (
      <RightLogo>
        <Link onClick={() => setNavbar(false)}>
          <PersonLogo src={Person} style={{ marginRight: "1vw" }} />
        </Link>
        <HamberLogo
          src={Menu}
          onClick={() => {
            setNavbar(!navbar);
          }}
        />
      </RightLogo>
    );
  }
}

export default function Header({ border }) {
  //여기서 navbar api 호출해서 넘겨주면 독립적으로 테스트를 할 수 있다.
  const [navbar, setNavbar] = useState(false);
  const [urlPathUUid1, setUrlPathUUid1] = useState("");
  const [urlPathUUid2, setUrlPathUUid2] = useState("");
  const token = getAccessToken();
  const path = useLocation();
  const [domain, url, uuid1, uuid2] = path.pathname.trim().split("/");
  console.log(domain);
  console.log(url);

  useEffect(() => {
    setUrlPathUUid1(uuid1);
  }, []);
  useEffect(() => {
    setUrlPathUUid2(uuid2);
  }, []);

  return (
    <>
      <HeaderDiv isBoolean={border}>
        <HeaderLogoDiv>
          <div>
            {uuid1 || uuid2 ? (
              <Link
                to={`/Guest/${uuid1}/${uuid2}`}
                onClick={() => setNavbar(false)}
              >
                <Logo src={logo} />
              </Link>
            ) : (
              <Link to="/" onClick={() => setNavbar(false)}>
                <Logo src={logo} />
              </Link>
            )}
          </div>
          <TokenStatusLink
            setNavbar={setNavbar}
            token={token}
            navbar={navbar}
          />
        </HeaderLogoDiv>
      </HeaderDiv>
      {navbar ? (
        <Navbar
          setNavbar={setNavbar}
          token={token}
          uuid1={urlPathUUid1}
          uuid2={urlPathUUid2}
        />
      ) : null}
    </>
  );
}
