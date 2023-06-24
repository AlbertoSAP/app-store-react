import axios from "axios";
import { IResponse } from "../interface/IEndPointResponse ";

export const productCallEndPoint = () => {
  const backEndUrl: string = process.env.REACT_APP_BACKEND_RENDER ?? "";
  // const header = { "Content-Type": "application/json"};

  const getAllProducts = async () => {
    try {
      const userInfo = await axios.get(`${backEndUrl}/products`);

      console.log(userInfo);

      const { data } = userInfo.data;

      return data;
    } catch (error) {
      const { statusText } = (error as IResponse).response.data;
      throw new Error(statusText);
    }
  };

  return {
    getAllProducts,
  };
};
