import React from 'react';
import MainContainer from "../../containers/main/MainContainer";
import { getAccessToken } from '../../tokens/token';


export default function MainPage() {
  const token = getAccessToken();

  return <MainContainer token={token}/>
}
