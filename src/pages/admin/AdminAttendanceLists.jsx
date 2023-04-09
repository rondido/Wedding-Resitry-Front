import React, {useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import AdminLists from '../../components/AdminLists.jsx'
import * as XLSX from 'xlsx';
import AdminAttendanceListsContainer from "../../containers/admin/AdminAttendanceListsContainer.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);


// 결혼식 참석여부 리스트 페이지
function AdminAttendanceLists() {
  
  // FIXME 이후 실 data 받아 적용
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


 
  // FIXME 받아온 데이터를 다운받도록 변경 필요
  const worksheet = XLSX.utils.json_to_sheet(attendance);
  const workbook = XLSX.utils.book_new();

  const onDownToExcel = ()=>{
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
    XLSX.writeFile(workbook, "test.xlsx", { compression: true });
  }

  return (
    <div>

<AdminAttendanceListsContainer></AdminAttendanceListsContainer>
      <AdminLists attendance={attendance} setAttendance={setAttendance} absence={absence} setAbsence={setAbsence} undecided={undecided} setUndecided={setUndecided} />
    <button onClick={onDownToExcel}>Excel파일로 저장하기</button>
  </div>
  )
}

export default AdminAttendanceLists