import { httpClient } from "../../apis/HttpClient";

export class GoodsProductService {
  #httpClient;
  constructor(httpClient) {
    this.#httpClient = httpClient;
  }
  //상품 등록 게시판 생성
  async addBorderId() {
    try {
      const res = await this.#httpClient.create("usersgoods/add/board", {
        method: "GET",
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export const goodsProductService = new GoodsProductService(httpClient);
