
export interface IErrorCallEndPoint {
    error:string;
    statusCode :number;
}

export interface IResult {
    status :number;
    statusText:string;
    userName: string;
    email: string;
    role: string;
    profileImage:string;
    authenticated:boolean;
    _id:string;
}

export interface Response {
data:IResult
}


export interface IResponse {
response:Response
}