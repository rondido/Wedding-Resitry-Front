import React from 'react'
import { Routes, Route } from "react-router-dom";

// Reset CSS
import { Reset } from 'styled-reset'

// 페이지 불러오기
import Layout from './pages/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
// 절대경로 설정 예시 // @사용
import NotFound from '@/pages/NotFound'
// import NotFound from './pages/NotFound'

// 관리자 페이지 
import AdminAlarmLists from './pages/AdminAlarmLists';
import AdminAttendanceLists from './pages/AdminAttendanceLists';
import AdminDonationLists from './pages/AdminDonationLists';
import AdminMemo from './pages/AdminMemo';
import AdminMain from './pages/AdminMain';

// 상품 갤러리
import GalleryWedding from './pages/GalleryWedding';
import GallerySupport from './pages/GallerySupport';
import GoodsSupport from './pages/GoodsSupport';
import GoodsProduct from './pages/GoodsProduct';

function App() {
  return (
    <div className="App">
      <Reset />
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
          <Route path="/GalleryWedding" element={<GalleryWedding />} />
          <Route path="/GallerySupport" element={<GallerySupport />} />
          <Route path="/GoodsSupport" element={<GoodsSupport />} />
          <Route path="/GoodsProduct" element={<GoodsProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
