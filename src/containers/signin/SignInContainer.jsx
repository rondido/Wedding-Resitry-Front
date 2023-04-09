import React from "react";
import styled from "styled-components";
import GoogleSignInButton from "../../components/signin/GoogleSignInButton.jsx";
import SignInForm from "@/components/signin/SignInForm.jsx";
import KakaoSignInButton from "../../components/signin/KakaoSignInButton.jsx";

const SignInStyled = styled.div`
  background: rgba(234, 234, 234, 0.4);
  margin: auto;
  
  div.wrapper {
  opacity: 0.7;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  height: 573px;
  width: 653px;
  }

  
`
export default function SignInContainer() {
  return <SignInStyled>
    <div className="wrapper">
      <SignInForm></SignInForm>
      <GoogleSignInButton></GoogleSignInButton>
      <KakaoSignInButton></KakaoSignInButton>

    </div>
    </SignInStyled>;
}
