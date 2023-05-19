async function getGoodsProductApi() {
  try {
    const response = await fetch("/GoodsProduct/all");
    const { data } = await response.json();
    return {
      data,
    };
  } catch (error) {
    console.error(error);
  }
}

async function postGoodsProductApi(url) {
  try {
    const response = await fetch("/usersgoods/add/products", {
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

export { getGoodsProductApi, postGoodsProductApi };
