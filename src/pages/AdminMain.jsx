import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// 이후 실 data 받아 적용할 것
const attendanceData = {
  labels: ['참석', '불참석', '미정'],
  datasets: [
    {
      // label: '#',
      data: [12, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderWidth: 0,
    },
  ],
};

const donationData = {
  labels: ['상품A', '상품B', '상품C', '상품D', '상품E', '기타'],
  datasets: [
    {
      data: [20, 5, 3,6,8,9],
      backgroundColor: [
        'rgba(216, 99, 125, 0.2)',
        'rgba(69, 156, 214, 0.2)',
        'rgba(113, 75, 189, 0.2)',
        'rgba(94, 233, 177, 0.2)',
        'rgba(255, 237, 102, 0.2)',
        'rgba(168, 166, 206, 0.2)'
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: false,
}
function AdminMain() {

  return (
    <div>
      <div>
        <h3>결혼식 참석 여부</h3>
        <Doughnut options={options} data={attendanceData}  width="300px" height="300px" />
        <p>결혼식 참석</p>
        <p>%, 명</p>
        {/* <p>결혼식 불참석</p>
        <p>%, 명</p> */}
      </div>


      <div>
        <h3>상품 그래프</h3>
        <Doughnut options={options} data={donationData}  width="300px"  height="300px" />
        <p>A 제품명, 금액 후원</p>
        <p>% 달성</p>
        {/* <p>B 제품명, 금액 후원</p>
        <p>% 달성</p>
        <p>C 제품명, 금액 후원</p>
        <p>% 달성</p> */}
      </div>
    </div>
  )
}

export default AdminMain