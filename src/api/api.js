import apiServices from "../services/services";

export class DataLoader {
  async mProductInfoLoader() {
    try {
      const res = await apiServices.getMenClothing();
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
  async jeweleryInfoLoader() {
    try {
      const res = await apiServices.getJewelery();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async electronicsInfoLoader() {
    try {
      const res = await apiServices.getElectronics();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

const dataLoader = new DataLoader();

export default dataLoader;
