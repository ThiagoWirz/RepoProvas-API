import { Request, Response } from "express";
import * as models from "../models/index.js";
import * as userService from "../services/userService.js"
import * as authService from "../services/authService.js"
import jwt from "jsonwebtoken"

export async function create(req: Request, res: Response) {
  const {email, password, confirmPassword} = req.body;
  if(!email || !password || !confirmPassword){
    throw{ type: "bad-request", message: "Please, fill up all inputs"}
  }

  if(password !== confirmPassword){
    throw{ type: "unauthorized", message: "Passwords must match"}
  }
  
  await userService.create(email, password)

  res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
  const user: models.UserSignIn = req.body;
  if(!user.email || !user.password){
    throw{ type: "bad-request", message: "Please, fill up all inputs"}
  }  
  const userData = await userService.signIn(user)

  await authService.createSession(userData.id, userData.token)
  
  res.send(userData)
}