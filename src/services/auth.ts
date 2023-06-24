import axios from "axios";
import {
  IErrorCallEndPoint,
  IResponse,
  IResult,
} from "../interface/IEndPointResponse ";
import { ILogin } from "../interface/ILogin";
import { IRegister } from "../interface/IRegister";

export const authCallEndPoint = () => {
  const backEndUrl:string = process.env.REACT_APP_BACKEND_RENDER ?? '';

  const header = { "Content-Type": "application/json"};

  const login = async (
    loginInfo: ILogin
  ): Promise<IResult | IErrorCallEndPoint> => {
    try {
      const userInfo = await axios.post(
        `${backEndUrl}/auth/login`,
        JSON.stringify(loginInfo),
        { headers: header }
      );
      return userInfo.data;
    } catch (error) {

      const { statusText } = (error as IResponse).response.data;

      throw new Error (statusText);
    }
  };

   const createAccount = async (dataAcount: IRegister) => {
    try {
      const userInfo = await axios.post(
          `${backEndUrl}/auth/register`,
          dataAcount,
          { headers: header }
      );
      console.log(userInfo, 'Service register');

      return userInfo;
  } catch (error) {

    const { statusText } = (error as IResponse).response.data;
      throw new Error (statusText);
    }
}
  return { login,createAccount };
};
