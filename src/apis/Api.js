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
      },
    });
    const { data } = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}

export { getGoodsProductApi, postGoodsProductApi, deleteGoodsAdd };
