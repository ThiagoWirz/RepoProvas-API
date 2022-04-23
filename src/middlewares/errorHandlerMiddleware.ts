import { NextFunction, Request, Response } from "express";

export function errorHandler(error, req: Request, res: Response, next: NextFunction){
  console.log(error);
  if(error.type === "validation_error") return res.status(422).send(error.message);
  if(error.type === "bad_request") return res.status(400).send(error.message);
  if(error.type === "unauthorized") return res.status(401).send(error.message)
  res.sendStatus(500)
}