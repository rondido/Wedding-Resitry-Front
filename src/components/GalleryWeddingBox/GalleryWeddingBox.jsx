import React, {  useState } from 'react'
import styled from 'styled-components';
import GalleryWeddingModal from '../modal/GalleryWeddingModal';

const Onediv = styled.div`
    width: 500px;
    height: 500px;
    border:1px solid #929292;
    display: flex;
    justify-content: center;
    background-color: #D5C384;
`;



export default function GalleryWeddingBox() {
  const [modalOpen,setModalOpen] = useState(false);

  return (
    <div>
        <Onediv onClick={()=>{setModalOpen(!modalOpen);}}/>
        {modalOpen ? <GalleryWeddingModal/>:null}
    </div>
  )
}
