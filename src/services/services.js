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

  async getWomenClothing() {
    try {
      const response = await this.client.get("/women's clothing");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getJewelery() {
    try {
      const response = await this.client.get("/jewelery");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getElectronics() {
    try {
      const response = await this.client.get("/electronics");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new ApiService();

export default service;
