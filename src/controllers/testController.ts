import { Request, Response } from "express";
import * as testService from "../services/testService.js"


export async function getTests(req: Request, res: Response) {

  const tests = await testService.getAll()

  res.status(200).send(tests)
}

export async function getTestsByDiscipline(req: Request, res: Response) {
  const tests = await testService.getByDiscipline()

  res.status(200).send(tests)
}

export async function getTestsByTeacher(req: Request, res: Response) {
  const tests = await testService.getByTeacher()

  res.status(200).send(tests)
}