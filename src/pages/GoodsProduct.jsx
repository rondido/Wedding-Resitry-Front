import React, { useEffect, useState} from 'react';
//공유 이미지 가져오기
import Share from '@/assets/icons/share.png';
import ShareBox from '@/components/ShareBox';
import styled from 'styled-components';
import Box from '@/components/box/Box';

const GoodsText = styled.input`
  border:0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100px;
  margin-bottom: 5px;
  text-align: center;  
  background-color: #E0E0E0;
`;

const GoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 935px;
`;

const GoodsWeddingText = styled.input`
  outline: none;
  border: none;
  background-color: #EBEBEB;
  width: 80px;
  border-radius: 10px 0 0 10px ;
  height: 33px;
  text-align: center;
  
`;

const GoodsWeddingbank = styled.input`
  outline: none;
  border: none;
  background-color: #EBEBEB;
  width: 80px;
  height: 33px;
  text-align: center;
  margin-left: 5px;
`;


const GoodsWeddingaccountnumber = styled.input`
  outline: none;
  border: none;
  background-color: #EBEBEB;
  width: 200px;
  border-radius: 0 10px 10px 0 ;
  margin-left: 5px;
  height: 33px;
  text-align: center;
`;

const GoodsWeddingadress = styled.input`
  outline: none;
  border: none;
  background-color: #EBEBEB;
  width: 200px;
  border-radius: 10px;
  margin-left: 5px;
  height: 33px;
  text-align: center;
`;

const GoodsSharelink = styled.span`  
  font-size: 20px;
  font-weight: 400px;
  font-size: 14px;
  line-height: 25px;  
`;

const GoodsShareLinkdiv = styled.div`
  width: 100%;  
  text-align: right;
  height: 80px;     
`;

const GoodsWeddingdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;  
  width: 100%;  
`;

const BoxContainer = styled.div`
  display: flex;
  height: 500px;
  margin-top:20px;
 
`

const BoxItem = styled.div`
  display: flex;
  &:nth-child(odd){
   margin-top: auto;
  }      
`

const ItemDiv = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  &:nth-child(odd){
    background-color: blue;
  }
`;



const StyledTrack = styled.div`
  width: 5px;
  height: 100px;  
  background-color: #EBEBEB;
  border-radius: 15px;  
  transform: rotate(180deg);


`;

const StyledRange = styled.div`
  display: flex;
  width: 100%;
  height: ${({ width }) => `${width}%`};
  background: linear-gradient(to right, blue, blue); 
`;

const ValueItem = styled.div`
  width: 100px;

`
export default function GoodsProduct() {
  const [sharebox,setSharebox] = useState(false);  
  const [fetchdata,SetFetchData] = useState([]);
  
  useEffect(()=>{
    fetch("/GoodsProduct/all")
    .then((res) => res.json())
    .then((data) => {
        SetFetchData(data);
    });
  },[])

  return (
    <div>
      <GoodsContainer> 
          <GoodsShareLinkdiv>
              <GoodsSharelink onClick={()=>{setSharebox(!sharebox);}}><img src={Share} style={{
                width:"12px",
                marginTop:"20px",              
              }}/>링크 공유하기</GoodsSharelink>       
              <div>{sharebox ? <ShareBox/>:null}</div>
          </GoodsShareLinkdiv>                  
          <div>
            <GoodsText placeholder='신부 이름' style={{
              marginBottom:"20px"
            }}/>
            <br/>
            <GoodsText placeholder='신랑 이름'/>
          </div>       
          <GoodsWeddingdiv>
              <GoodsWeddingadress placeholder='예식장 주소' style={{
                marginBottom:"20px"
              }}/>
                <input type="datetime-local" style={{
                 width:"200px",
                 borderRadius:"10px",
                 backgroundColor:"#EBEBEB",
                 height:"33px",
                 border:"1px solid #EBEBEB"
                }}/>                     
          </GoodsWeddingdiv>
          <div style={{
            marginTop:"30px"
          }}>
              <GoodsWeddingText placeholder='신부 이름'/><GoodsWeddingbank placeholder='은행'/><GoodsWeddingaccountnumber placeholder='계좌번호'/>
          </div>
             <br/>
          <div>
              <GoodsWeddingText placeholder='신랑 이름'/><GoodsWeddingbank placeholder='은행'/><GoodsWeddingaccountnumber placeholder='계좌번호'/>
          </div> 
          <div>
            <BoxContainer>
            {
              fetchdata.data && fetchdata.data.map((value,idx)=>(                
                <BoxItem key={idx}>
                    <Box url={value.usersGoodsImgUrl}/>                    
                    <ItemDiv>
                      <StyledTrack>
                        <StyledRange width={value.usersGoodsPercent} />                       
                      </StyledTrack>
                      <ValueItem>
                          <div>
                            <p>{value.usersGoodsName}</p>
                          </div>
                          <div>
                            <p>{value.usersGoodsPrice}원</p>
                          </div>
                          <div>
                            <p>{value.totalDonation}원 후원</p>
                          </div>
                      </ValueItem>
                    </ItemDiv>
                </BoxItem>                
              ))
            }
            </BoxContainer>
          </div>
      </GoodsContainer>         
    </div>
  )
}
