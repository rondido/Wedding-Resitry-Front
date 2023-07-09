import axios from "axios";
import { getAccessToken } from "../tokens/token";

const token1 = getAccessToken();

//navbar 알림
async function headerNavbarApi(token) {
  try {
    const res = await axios(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/navbar/alarm/all`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

//상품 등록 게시판 생성
async function addBorderIdApi(token) {
  try {
    const res = await axios(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/usersgoods/add/board`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

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
        Authorization: `Bearer ${token1}`,
      },
    });
    const { data } = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}

//사진 조회
async function getGalleryWeddingImage(token) {
  console.log(token);
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
async function postGalleryWeddingImageAdd(formData, token) {
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
async function deleteGalleryWeddingImage(galleryImgId, token) {
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

//후원 사진 요청
async function getGallerySupportImage(token, getLocalGeustInfo) {
  try {
    const res = await axios.get(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/invitation/gallery/images`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Guest-Info": `${getLocalGeustInfo}`,
        },
      },
      { withCredentials: true }
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

//후원 uuid 제공
async function getGallerySupportUUID(token, uuidFirst, uuidSecond) {
  try {
    const res = await axios.get(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/invitation/uuids/info?uuidFirst=${uuidFirst}&uuidSecond=${uuidSecond}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
      { withCredentials: true }
    );
    console.log(res);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

// 공유할 링크 가져오기

async function getGoodsUrlUUID(token) {
  console.log(token);
  try {
    const res = await axios.get(
      `http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/invitation/uuids`,
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

export {
  getGoodsProductApi,
  postGoodsProductApi,
  deleteGoodsAdd,
  postGalleryWeddingImageAdd,
  deleteGalleryWeddingImage,
  getGalleryWeddingImage,
  addBorderIdApi,
  getGoodsUrlUUID,
  headerNavbarApi,
  getGallerySupportImage,
  getGallerySupportUUID,
};
