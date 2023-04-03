import React from "react";
import MainContainer from "../../containers/main/MainContainer";
import Header from "../../components/header/Header";

export default function MainPage() {
  return (
    <>
      <Header border={true} />
      <MainContainer />
    </>
  );
}
