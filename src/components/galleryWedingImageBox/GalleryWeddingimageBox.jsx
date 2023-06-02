import React, { useCallback,  useRef, useState } from 'react';
import styled from 'styled-components';
import {postGalleryWeddingImageAdd} from '../../apis/Api';

import Plus from '@/assets/icons/plus.png';

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 264px;
  background-color: blue;
  background: rgba(228, 230, 232, 0.7);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

`;

const Imageinput = styled.div`
    margin: 0 8px 0 8px;
    label{
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"]{
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;    
  }
  img{
    width: 20px;
    height: 20px;   
  }
  
`;


export default function GalleryWeddingimageBox({getIsTrued,getIsImageData}) {  
  const [image,setImage] = useState(false);

  const imageInput = useRef();
  async function postImageRender(dataImage){
    const data = await postGalleryWeddingImageAdd(dataImage);    
    getIsImageData(data);
  }
  const onUploadImage = useCallback((e)=>{    
    if(!e.target.files[0]){
      return;
    }
    if(e.target.files[0]){
      const formData = new FormData();
      formData.append('galleryImg',e.target.files[0]);
      postImageRender(formData);
      setImage(false);
      getIsTrued(image);      
    }
  },[])


  const onClickImage = useCallback(() => {
    if(!imageInput.current){
      return;
    }
    imageInput.current.click();
  }, []);
  
  return (
    <>
      <Base >
          <Imageinput>      
                <input type="file" name="thumbnail" accept="image/jpg, image/png, image/jpeg" id="ex_file" ref={imageInput} onChange={onUploadImage} />
                <img src={Plus} onClick={onClickImage}  />                         
          </Imageinput>
      </Base>
    </>
  )
}
