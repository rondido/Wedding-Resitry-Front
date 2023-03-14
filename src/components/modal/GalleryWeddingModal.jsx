import React from 'react';
import styled  from 'styled-components';
import Plus from '@/assets/icons/plus.png';


const Container =styled.div`
      /* 모달창 크기 */
  width: 500px;
  height: 200px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background: rgba(228, 230, 232, 0.7);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export default function GalleryWeddingModal() {
  return (
    <>
        <Container>
            <img src={Plus} style={{
                width:"20px",
                height:"20px"                
              }}/>
        </Container>
    </>
  )
}
