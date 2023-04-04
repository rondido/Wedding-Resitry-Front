import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// Reset CSS
import { Reset } from "styled-reset";

// 페이지 불러오기
//import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
// 절대경로 설정 예시 // @사용
import NotFound from "@/pages/NotFound";
// import NotFound from './pages/NotFound'

//메인 페이지
import Main from "./pages/main/MainPage";

// 관리자 페이지
import AdminAlarmLists from "./pages/AdminAlarmLists";
import AdminAttendanceLists from "./pages/AdminAttendanceLists";
import AdminDonationLists from "./pages/AdminDonationLists";
import AdminMemo from "./pages/AdminMemo";
import AdminMain from "./pages/AdminMain";

// 상품 갤러리
import GalleryWedding from "./pages/gallery/GalleryWedding";
import GallerySupport from "./pages/gallery/GallerySupport";
import GoodsSupport from "./pages/goods/GoodsSupport";
import GoodsProduct from "./pages/goods/GoodsProduct";

//상품 박스 Test
import Header from "./components/header/Header";

function App() {
  //header 여기서 호출해야하나?
  // 이유는 main 화면에서는 header 선이 없기 때문
  // 페이지 에따른 header border 선 처리
  const location = useLocation();
  const [border, setBorder] = useState(false);
  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/") {
      setBorder(true);
    }
  }, []);
  return (
    <>
      <Reset />
      <Header border={border} />
      <Routes>
        {/* url경로 별 랜더링 페이지 */}
        <Route path="/" element={<Main />} />
        <Route element={<Home />} />
        <Route path="admin" element={<Admin />}>
          <Route path="main" element={<AdminMain />} />
          <Route path="alarm" element={<AdminAlarmLists />} />
          <Route path="attendance" element={<AdminAttendanceLists />} />
          <Route path="donation" element={<AdminDonationLists />} />
          <Route path="memo" element={<AdminMemo />} />
        </Route>
        <Route path="/GalleryWedding" element={<GalleryWedding />} />
        <Route path="/GallerySupport" element={<GallerySupport />} />
        <Route path="/GoodsSupport" element={<GoodsSupport />} />
        <Route path="/GoodsProduct" element={<GoodsProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
