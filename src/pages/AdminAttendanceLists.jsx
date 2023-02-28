import React from 'react'

// 결혼식 참석 여부 리스트 페이지
function AdminAttendanceLists() {
  return (
    <div>
      <div>
        <h3>결혼식 참석 여부</h3>
        <p>차트 그래프</p>

        <p>결혼식 참석</p>
        <p>%, 명</p>

        <p>결혼식 불참석</p>
        <p>%, 명</p>

        <p>2023/02/06   12:10</p>
      </div>

      <div>
      <h3>참석자</h3>
      <p>김미경 님</p>
      <p>조수민 님</p>
      <p>이인아 님</p>
      </div>

      <div>
      <h3>불참자</h3>
      <p>한민지 님</p>
      <p>지현철 님</p>
      <p>수민우 님</p>
      <p>권민오 님</p>
      </div>

      <div>
      <h3>미정</h3>
      <p>조지훈 님</p>
      <p>최우림 님</p>
      </div>
  </div>
  )
}

export default AdminAttendanceLists