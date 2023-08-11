import HttpClient from "../../apis/HttpClient";

//상품 등록 게시판 생성
export async function addBorderId() {
  try {
    const res = await HttpClient.get("usersgoods/add/board");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
