import { Request, Response } from "express";
import * as userService from "../services/userService.js"


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