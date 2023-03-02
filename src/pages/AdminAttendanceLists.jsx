import React, {useState} from 'react'

import AdminLists from '../components/AdminLists'
// 결혼식 참석 여부 리스트 페이지
function AdminAttendanceLists() {

  const [attendance, setAttendance] = useState([
    { id: 1, name: "김미경" },
    { id: 2, name: "조수민" },
  ]);

  const [absence, setAbsence] = useState([
    { id: 3, name: "이인아" },
    { id: 4, name: "한민지" },
    { id: 5, name: "수민우" },
    { id: 6, name: "권민오" },
  ]);

  const [undecided, setUndecided] = useState([
    { id: 7, name: "조지훈" },
    { id: 8, name: "최우림" },
  ]);

  return (
    <div>

        <h3>결혼식 참석 여부</h3>
        <p>차트 그래프</p>
{/*     <p>결혼식 참석</p>
        <p>%, 명</p>
        <p>결혼식 불참석</p>
        <p>%, 명</p> */}

      <h3>참석자</h3>
      <AdminLists attendance={attendance} setAttendance={setAttendance} absence={absence} setAbsence={setAbsence} undecided={undecided} setUndecided={setUndecided} />
  </div>
  )
}

export default AdminAttendanceLists