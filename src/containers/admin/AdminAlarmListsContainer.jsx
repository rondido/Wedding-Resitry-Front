import React from "react";import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  width: 1250px;
  margin: 80px auto;
  align-items: flex-start;
  justify-content: space-between;

  div {
    width: 550px;
    div.item {
      margin-bottom: 50px;
    }
    h3 {
      margin-bottom: 20px;
      font-size: 14px;
    }
    p {
      border-bottom: 1px solid #AAA;
      padding-bottom: 5px;
    }
    span{
      display: block;
      text-align: right;
      margin-top: 3px;
      font-size: 13px;
    }
  }
`

// FIXME - 결혼식 참석 여부에 따라 글자색 변경
// 참석 = 파란색 / 불참석 = 빨간색


function AdminAlarmListsContainer() {
    return (
        <StyledDiv>
            <div>
                <h3>참석여부 알림</h3>
                <div className="item">
                    <p>김미경님이 결혼식 참석에 체크하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>김미경님이 결혼식 불참석에 체크하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>김미경님이 결혼식 참석에 체크하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>김미경님이 결혼식 참석에 체크하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>김미경님이 결혼식 불참석에 체크하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
            </div>
            <div>
                <h3>후원 알림</h3>
                <div className="item">
                    <p>지현철님이 일반 세탁기에  100,000원을 후원하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>지현철님이 일반 세탁기에  100,000원을 후원하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>지현철님이 일반 세탁기에  100,000원을 후원하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>지현철님이 일반 세탁기에  100,000원을 후원하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
                <div className="item">
                    <p>지현철님이 일반 세탁기에  100,000원을 후원하셨습니다.</p>
                    <span>2023/02/06   12:10</span>
                </div>
            </div>
        </StyledDiv>
    )
}

export default AdminAlarmListsContainer