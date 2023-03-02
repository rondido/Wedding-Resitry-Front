import React, {useState} from 'react'
import { ReactSortable } from "react-sortablejs";

// 결혼식 참석 여부 리스트 페이지
function AdminAttendanceLists() {

  const [state, setState] = useState([
    { id: 1, name: "김미경" },
    { id: 2, name: "조수민" },
    { id: 3, name: "이인아" },
    { id: 4, name: "한민지" },
    { id: 5, name: "수민우" },
    { id: 6, name: "권민오" },
    { id: 7, name: "조지훈" },
    { id: 8, name: "최우림" },
  ]);

  return (
    <div>
      <div>
        <h3>결혼식 참석 여부</h3>
        <p>차트 그래프</p>
{/*     <p>결혼식 참석</p>
        <p>%, 명</p>
        <p>결혼식 불참석</p>
        <p>%, 명</p> */}
      </div>

      <div>
      <h3>참석자</h3>
      <ReactSortable list={state} setList={setState} sort="true" animation="200" easing="ease-out">
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
      </div>
      <h3>불참자</h3>
      <h3>미정</h3>
  </div>
  )
}

export default AdminAttendanceLists