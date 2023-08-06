import axios from "axios";
import { authToken } from "../repository/AuthTokenRepository";
class HttpClient {
  constructor(token) {
    this.baseURL = import.meta.env.VITE_HTTP_API_URL;
    this.token = token;
  }
  async create(endpoint, options) {
    const url = this.baseURL + endpoint;
    try {
      const response = await axios(url, {
        ...options,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: this.token.get() ? "Bearer " + this.token.get() : "",
        },
      });
      return response;
    } catch (e) {
      throw new Error();
    }
  }
}

export const httpClient = new HttpClient(authToken);
