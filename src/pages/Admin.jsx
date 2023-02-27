import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <nav>
        <ul>          
          <li><Link to="main">관리 메이지</Link></li>
          <li><Link to="donation">후원자 리스트</Link></li>
          <li><Link to="attendance">결혼식 참석 여부 리스트</Link></li>
          <li><Link to="alarm">알림 목록</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Admin