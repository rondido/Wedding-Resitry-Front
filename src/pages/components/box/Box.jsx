/* eslint-disable */
import React from 'react'
import Plus from '@/assets/icons/plus.png';
import styled from 'styled-components';

const Divbox = styled.div` 
    background-color: #D9D9D9;
    width: 228px;
    height: 295px;
    border-radius: 150px;
    display: flex;
    justify-content: center;
`; 

const Plusimg = styled.div`
    margin: auto;
    display: block;

`;

const Editdiv = styled.div`
    margin-bottom: 20px;
    width: 220px;
    text-align: center;
`;

const Boxcontainer = styled.div`
`;

// 상품 등록 후 넘어온 상품의 이름과  기타 등등 여기서 관리
// 게이지바
// 상품 명
// 가격
// 총 후원 현황
// 상품 등록 api를 통해 box 생성하기

export default function Box() {
    //상품등록 modal open
  const modalopen = () =>{
    alert("상품 등록 modal 띄울 예정");
  }
  
    return (
    <>
        <Boxcontainer>
            <Editdiv>
                EDIT
            </Editdiv>        
            <Divbox onClick={modalopen}>
                <Plusimg>
                    <img src={Plus} style={{width:"20px",height:"20px"}}/>
                </Plusimg>
            </Divbox>
        </Boxcontainer>
    </>
  )
}
