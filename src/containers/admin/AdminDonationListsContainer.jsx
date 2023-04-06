
import React from "react";
import styled from 'styled-components'
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledDiv = styled.div`
  height: max-content;
  width: 1300px;
  margin: auto;
  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const StyledSection = styled.section`
  margin: 40px auto 80px;
  display: flex;
  flex-direction: column;
  padding: 20px;
 
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
const StyledArticle = styled.article`
width: 350px;
margin-left: auto;
h3 {
  color: #4B4B4B;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 10px;
}
div.box {
  border: 1px solid #4B4B4B;
  border-radius: 10px;
  overflow-y: scroll;
    
  p {
    border-bottom: 1px solid #4B4B4B;
    margin: 15px 20px 15px 15px;
    padding-top: 5px;
    padding-bottom: 7px;
  }

  .button{
    display: flex;
    justify-content: flex-end;
    border: none;
    span {
      cursor: pointer;
      margin: 15px 5px 15px;
      padding: 3px;
      font-size: 14px;
    }
    margin-right: 10px;
  }
}
`
const StyledBox = styled.div`
  display: flex;
  width: 1200px;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
`
const StyledDivItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
img {
  width: 140px;
  height: 140px;
  border: 3px solid #00517F;
  border-radius: 5em;
  }
h4 {
  font-size: 13px;
  text-align :center ;
  margin-top: 15px;
}
  h4::after {
    display: block;
    content: '';
    width: 50px;
    height: 2px;
    margin: 5px auto 15px;
    border-bottom: 1px solid #AAA;
}
  p {
    margin: 8px 0;
  }
`

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
function AdminDonationListsContainer() {
    return (
        <StyledDiv>
            <div className='container'>
                <StyledSection >
                    <div className='item'>
                        <div className='right'>
                            <h3>상품 그래프</h3>
                            <Doughnut options={options} data={donationData}  width="330px"  height="330px" />
                        </div>
                        <span>
            <h4>A 트레이 사이드 테이블  114,170원 후원</h4>
            <p>98% 달성</p>
            <h4>B 과일/야채 세척기  170,100원 후원</h4>
            <p>22% 달성</p>
            <h4>C 제품명, 금액 후원</h4>
            <p>11% 달성</p>
          </span>
                    </div>
                </StyledSection>
                <StyledArticle>
                    <h3>계좌 이체 후원자 리스트</h3>
                    <div className='box'>
                        <p>이지민 계좌이체 250,000원 후원</p>
                        <p>이지민 계좌이체 250,000원 후원</p>
                        <p>이지민 계좌이체 250,000원 후원</p>
                        <p>이지민 계좌이체 250,000원 후원</p>
                        <p>이지민 계좌이체 250,000원 후원</p>
                        <div className='button'>
                            <span>추가</span>
                            <span>수정</span>
                        </div>
                    </div>
                </StyledArticle>
            </div>
            <StyledBox>


                <StyledDivItem className='item'>
                    <div>
                        <img src="https://www.naturalbedcompany.co.uk/wp-content/uploads/Cochin-bed-in-cherry-MAIN.jpg" alt="itemA" />
                        <h4>트레이 사이드 테이블</h4>
                    </div>
                    <p>이인아 님 200,000원</p>
                    <p>정진목 님 100,000원</p>
                    <p>김인성 님 20,000원</p>
                </StyledDivItem>

                <StyledDivItem className='item'>
                    <div>
                        <img src="https://www.naturalbedcompany.co.uk/wp-content/uploads/Cochin-bed-in-cherry-MAIN.jpg" alt="itemA" />
                        <h4>트레이 사이드 테이블</h4>
                    </div>
                    <p>이인아 님 200,000원</p>
                    <p>정진목 님 100,000원</p>
                    <p>김인성 님 20,000원</p>
                </StyledDivItem>
                <StyledDivItem className='item'>
                    <div>
                        <img src="https://www.naturalbedcompany.co.uk/wp-content/uploads/Cochin-bed-in-cherry-MAIN.jpg" alt="itemA" />
                        <h4>트레이 사이드 테이블</h4>
                    </div>
                    <p>이인아 님 200,000원</p>
                    <p>정진목 님 100,000원</p>
                    <p>김인성 님 20,000원</p>
                </StyledDivItem>
                <StyledDivItem className='item'>
                    <div>
                        <img src="https://www.naturalbedcompany.co.uk/wp-content/uploads/Cochin-bed-in-cherry-MAIN.jpg" alt="itemA" />
                        <h4>트레이 사이드 테이블</h4>
                    </div>
                    <p>이인아 님 200,000원</p>
                    <p>정진목 님 100,000원</p>
                    <p>김인성 님 20,000원</p>
                </StyledDivItem>
            </StyledBox>
        </StyledDiv>
    )
}

export default AdminDonationListsContainer