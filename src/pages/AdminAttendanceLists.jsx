import React, {useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components'
import AdminLists from '../components/AdminLists'
import * as XLSX from 'xlsx';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledSection = styled.section`
margin: auto;
width: 1285px;
display: flex;
flex-direction: column;
align-items: space-around;
padding: 20px;
margin-top: 40px;
margin-bottom: 80px;

h3 {
  color: #4B4B4B;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}

div.item {
  display: flex;
  align-items: center;
  margin: 0 250px;
}
.right {
  margin-left: auto;
}

span {
  border-left: 1px solid #000;
  height: fit-content;
  padding: 8px 15px;
  margin-left: 60px;
  h4{
    padding: 5px 0 2px;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    margin: 7px 0 10px;
  }
}
`

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


  const attendanceData = {
    labels: ['참석', '불참석', '미정'],
    datasets: [
      {
        data: [12, 2, 3],
        backgroundColor: [
          '#1552af',
          '#6c97dc',
          '#cfcfcf'
        ],
        borderWidth: 0,
      },
    ],
  };
  
  const options = {
    responsive: false,
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  // FIXME 받아온 데이터를 다운받도록 변경 필요
  const worksheet = XLSX.utils.json_to_sheet(attendance);
  const workbook = XLSX.utils.book_new();

  const onDownToExcel = ()=>{
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
    XLSX.writeFile(workbook, "test.xlsx", { compression: true });
  }

  return (
    <div>
<StyledSection>
        <div className='item'>
          <div>
            <h3>결혼식 참석 여부</h3>
            <Doughnut options={options} data={attendanceData}  width="300px" height="300px" />
          </div>
          <span>
            <h4>참석</h4>
            <p>%, 명</p>
            <h4>불참석</h4>
            <p>%, 명</p>
            <h4>미정</h4>
            <p>%, 명</p>
          </span>
        </div>
      </StyledSection>

      <AdminLists attendance={attendance} setAttendance={setAttendance} absence={absence} setAbsence={setAbsence} undecided={undecided} setUndecided={setUndecided} />
    <button onClick={onDownToExcel}>Excel파일로 저장하기</button>
  </div>
  )
}

export default AdminAttendanceLists