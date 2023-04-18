async function getGoodsProductApi() {
  try {
    const response = await fetch("/GoodsProduct/all");
    const { data } = await response.json();
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function postGoodsProductApi() {
  try {
    const response = await fetch("/usersgoods/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const { data } = await response.json();
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getGoodsProductApi, postGoodsProductApi };
