import jwt from "jsonwebtoken"
import * as models from "../models/index.js"
import dotenv from "dotenv"
dotenv.config()


export function verifyToken(token:string){
   return jwt.verify(token, process.env.JWT_SECRET) as string
}

export function createToken(user: models.User){
  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET)
  return token
}