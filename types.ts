import { Response, Request } from "express";

export interface UserInfo {
  phone: string;
  id: number;
}
declare global {
  namespace Express {
    interface Request {
      userInfo: UserInfo;
    }
  }
}
