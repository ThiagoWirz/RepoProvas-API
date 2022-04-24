import { NextFunction, Request, Response } from "express";
import * as authRepository from "../repositories/authRepository.js"
import * as userRepositories from "../repositories/userRepository.js"
import * as authUtils from "../utils/authUtils.js"


export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization as string
  const token = authorization?.replace("Bearer ", "")

  if(!token){
    throw { type: "unauthorized", message: "invalid token"}
  }

  const id = authUtils.verifyToken(token)
  const session = await authRepository.find(parseInt(id))
  if(!session){
    throw { type: "unauthorized", message: "session expired"}
  }

  const user = userRepositories.findById(session.userId)
  if(!user){
    throw { type: "unauthorized", message: "session expired"}
  }

  res.locals.user = user

  next()
}