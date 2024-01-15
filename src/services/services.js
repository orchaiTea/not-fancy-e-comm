import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com/products/category";

export class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getMenClothing() {
    try {
      const response = await this.client.get("/men's clothing");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new ApiService();

export default service;
