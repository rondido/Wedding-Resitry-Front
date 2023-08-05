import axios from "axios";

export class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async create(endpoint, options) {
    const url = this.baseURL + endpoint;
    try {
      const response = await axios(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (e) {
      throw new Error();
    }
  }
}
