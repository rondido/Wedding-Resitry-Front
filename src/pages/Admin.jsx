import React from 'react'
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: 1285px;
    margin: auto;
ul {
  margin: auto;
    display: flex;
    width: 1255px;
    justify-content: space-between;
    align-items: center;
    height: 37px;
    a {
      text-decoration: none;
      color: #000
    }
  }
  border-top: 1px solid #B0B0B0;
  border-bottom: 1px solid #B0B0B0;
`


function Admin() {
  return (
    <div>
      <StyledNav>
        <ul>          
          <li><Link to="main">관리 페이지</Link></li>
          <li><Link to="donation">후원자 리스트</Link></li>
          <li><Link to="attendance">결혼식 참석 여부 리스트</Link></li>
          <li><Link to="alarm">알림 목록</Link></li>
        </ul>
      </StyledNav>
      <Outlet />
    </div>
  )
}

export default Admin