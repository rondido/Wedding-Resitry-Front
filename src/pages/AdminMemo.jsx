import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: auto;
  width: 1250px;
  height: max-content;
  display: flex;
  justify-content: center;
  
  div.img {
    width: 600px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .item {
      box-sizing: border-box;
      width: 600px;
      padding: 20px 80px 0;
      height: 140px;
      margin-top: 25px;
      margin-bottom: 30px;
      background-color: #D9D9D9;
      border-radius: 50px;
      box-shadow: 2px 4px 4px rgba(0,0,0,0.25);
    }
    input {
      width: 430px;
      border-radius: 1rem;
      border: none;
      text-align: center;
      padding: 2px;
    }
    p {
      margin: 20px 0 5px;
      font-size: 14px;
    }
    span {
      text-decoration: underline;
      font-size: 14px;
      display: inline-block;
      width: 350px;
      text-align: right;
    }
    span:last-child {
      width: 80px;
    }
  }
  div.pad {
    border-left: 1px solid #000;
    margin: 25px auto;
    textarea {
    margin: 25px auto;
    margin-left: 25px;
    padding-right: 50px;
      width: 600px;
      height: 800px;
      resize: none;
      border: none;
      background-attachment: local;
      background-image:
        linear-gradient(to right, white 10px, transparent 10px),
        linear-gradient(to left, white 10px, transparent 10px),
        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
        line-height: 31px;
        padding: 8px 10px;
    }
  }
`


function AdminMemo() {
  return (
    <StyledDiv>
      <div className='img'>
        <div className='item'>
        <input placeholder='url을 입력해주세요' />
        <p>상품 이름: </p>
        <p>상품 가격: </p>
        <span>수정하기</span>
        <span>삭제하기</span>
        </div>
        <div className='item'>
        <input placeholder='url을 입력해주세요' />
        <p>상품 이름: </p>
        <p>상품 가격: </p>
        <span>수정하기</span>
        <span>삭제하기</span>
        </div>
        <div className='item'>
        <input placeholder='url을 입력해주세요' />
        <p>상품 이름: </p>
        <p>상품 가격: </p>
        <span>수정하기</span>
        <span>삭제하기</span>
        </div>
        <div className='item'>
        <input placeholder='url을 입력해주세요' />
        <p>상품 이름: </p>
        <p>상품 가격: </p>
        <span>수정하기</span>
        <span>삭제하기</span>
        </div>
        <div className='item'>
        <input placeholder='url을 입력해주세요' />
        <p>상품 이름: </p>
        <p>상품 가격: </p>
        <span>수정하기</span>
        <span>삭제하기</span>
        </div>
      </div>
      <div className='pad'>
        <textarea id="" cols="30" rows="10"></textarea>
      </div>
      </StyledDiv>
  )
}

export default AdminMemo