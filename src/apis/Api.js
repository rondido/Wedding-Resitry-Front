import axios from 'axios';

const token = '';

//상품 전체 조회
async function getGoodsProductApi() {
  try {
    const response = await fetch(`/GoodsProduct/all`);
    const { data } = await response.json();
    return {
      data,
    };
  } catch (error) {
    console.error(error);
  }
}

//상품 등록
async function postGoodsProductApi(url) {
  //borderid는 상품 등록 게시판 생성 시 만들어짐
  try {
    const response = await fetch(`/usersgoods/add/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        url: `${url}`,
      }),
    });
    const { data } = await response.json();

    return {
      data,
    };
  } catch (error) {
    console.error(error);
  }
}

//상품 삭제
async function deleteGoodsAdd(userGoodsId) {
  try {
    const response = await fetch(`/usersgoods?usersGoodsId=${userGoodsId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:`Bearer ${token}`
      },
    });
    const { data } = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}

//사진 등록 
async function postGalleryWeddingImageAdd(formData){  
  try{
    const res = await axios.post(`http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/gallery/img`,formData,{      
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: "application/json",
        Authorization:`Bearer ${token}`
      },
    });
    const data = res.data;
    return data;
  }catch(e){
    console.error(e);
  }
}

async function deleteGalleryWeddingImage(){  
  try{
    const res = await axios.delete(`http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/gallery/img`,{      
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: "application/json",
        Authorization:`Bearer ${token}`
      },
    });
    const data = res.data;
    return data;
  }catch(e){
    console.error(e);
  }
}

export { getGoodsProductApi, postGoodsProductApi, deleteGoodsAdd, postGalleryWeddingImageAdd };
