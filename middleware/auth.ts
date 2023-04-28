import { Request } from "express"
import jwt from "jsonwebtoken"
import { UserInfo } from "../types"

const auth = async (req: any, res: any, next: any) => {
 try {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) {
    res.status(401).json({
      success: false,
      error: "unathorized, fuck off!"
    })
  } else {
    const decodedData = jwt.verify(token, process.env.SECRET || "")
    req.userInfo = decodedData
    next()
  }
 } catch (error) {
  console.log(error);
  res.status(401).json({
    success: false,
    error: "unathorized, fuck off!"
  })  
 }
}

export default auth