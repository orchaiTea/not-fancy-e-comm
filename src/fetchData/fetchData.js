import apiServices from "../services/services";

export class DataLoader {
  async mProductInfoLoader() {
    try {
      const res = await apiServices.getMenClothing();
      console.log(res);
      return res;
    } catch (error) {
      console.log(`Oops!${error}`);
    }
  }
  async wProductInfoLoader() {
    try {
      const res = await apiServices.getWomenClothing();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

const dataLoader = new DataLoader();

export default dataLoader;
