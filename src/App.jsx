import React from 'react'
import { Routes, Route } from "react-router-dom";
// 페이지 불러오기
import Layout from './pages/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
// 관리자 페이지 
import AdminAlarmLists from './pages/AdminAlarmLists';
import AdminAttendanceLists from './pages/AdminAttendanceLists';
import AdminDonationLists from './pages/AdminDonationLists';
import AdminMemo from './pages/AdminMemo';
import AdminMain from './pages/AdminMain';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* url경로 별 랜더링 페이지 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />}>
            <Route path="main" element={<AdminMain />} />
            <Route path="alarm" element={<AdminAlarmLists />} />
            <Route path="attendance" element={<AdminAttendanceLists />} />
            <Route path="donation" element={<AdminDonationLists />} />
            <Route path="memo" element={<AdminMemo />} />
            <Route path="*" element={<NotFound />} />
          </Route> 
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
