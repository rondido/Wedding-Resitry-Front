import { httpClient } from "../../apis/HttpClient";

export class NavbarService {
  #httpClient;
  constructor(httpClient) {
    this.#httpClient = httpClient;
  }
  async get() {
    try {
      const res = await this.#httpClient.create("navbar/alarm/all", {
        method: "GET",
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export const navbarSerive = new NavbarService(httpClient);
