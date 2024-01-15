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
}

const dataLoader = new DataLoader();

export default dataLoader;
