import axios from "axios";
import {
  IErrorCallEndPoint,
  IResponse,
  IResult,
} from "../interface/IEndPointResponse ";
import { ILogin } from "../interface/ILogin";

export const authCallEndPoint = () => {
  const backEndUrl = process.env.REACT_APP_BACKEND_VERCEL_URL;

  const header = { "Content-Type": "application/json",
                   "Access-Control-Allow-Origin": "*",
                   };

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

      const { statusText, status } = (error as IResponse).response.data;

      throw { error: statusText, statusCode: status };
    }
  };

  return { login };
};
