import axios from "axios";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2ODYyMjk0MjMsImV4cCI6MTcxNzc2NTQyMywidXNlcklkIjoyLCJ1c2VyTmFtZSI6IuuwleynhO2YhCIsImJvYXJkc0lkIjo0LCJyb2xlIjoiVVNFUiJ9.vU1QGURdtEYq9vWk239GdLJzG2tvRYqYrOQL6ZcC3KABT9Mkx5LahgPvnplMIzYC6EBp3iv7Q3qV3QU-ARHMkw";

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
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}

//사진 조회
async function getGalleryWeddingImage() {
  try {
    const res = await axios.get(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/gallery/img`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
}

//사진 등록
async function postGalleryWeddingImageAdd(formData) {
  try {
    const res = await axios.post(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/gallery/img`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
}

//사진 삭제
async function deleteGalleryWeddingImage(galleryImgId) {
  try {
    await axios.delete(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/gallery/img/?galleryImgId=${galleryImgId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }      
    );      
  } catch (e) {
    console.error(e);
  }
}

export {
  getGoodsProductApi,
  postGoodsProductApi,
  deleteGoodsAdd,
  postGalleryWeddingImageAdd,
  deleteGalleryWeddingImage,
  getGalleryWeddingImage,
};
