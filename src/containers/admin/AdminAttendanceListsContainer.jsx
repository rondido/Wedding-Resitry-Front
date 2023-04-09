
import React from "react";
import styled from 'styled-components'
import {Doughnut} from "react-chartjs-2";

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

function AdminAttendanceListsContainer() {
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

    return (
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
    )
}

export default AdminAttendanceListsContainer