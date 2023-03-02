import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components'

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledDiv = styled.div`
  height: max-content;
`
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

// 이후 실 data 받아 적용할 것
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

const donationData = {
  labels: ['상품A', '상품B', '상품C', '상품D', '상품E', '기타'],
  datasets: [
    {
      data: [20, 5, 3,6,8,9],
      backgroundColor: [
        '#0f3267',
        '#255090',
        '#2079c3',
        '#4294d3',
        '#4facee',
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
function AdminMain() {

  return (
    <StyledDiv>
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
      <StyledSection >
        <div className='item'>
          <div className='right'>
            <h3>상품 그래프</h3>
            <Doughnut options={options} data={donationData}  width="330px"  height="330px" />
          </div>
          <span>
            <h4>A 제품명, 금액 후원</h4>
            <p>% 달성</p>
            <h4>B 제품명, 금액 후원</h4>
            <p>% 달성</p>
            <h4>C 제품명, 금액 후원</h4>
            <p>% 달성</p>
          </span>
        </div>
      </StyledSection>
    </StyledDiv>
  )
}

export default AdminMain