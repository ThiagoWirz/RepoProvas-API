import { Router } from "express"
import {validateToken} from "../middlewares/validateTokenMiddleware.js"
import * as testController from "../controllers/testController.js"

const testRouter = Router()

testRouter.get("/tests", validateToken, testController.getTests)
testRouter.get("/tests/disciplines", validateToken, testController.getTestsByDiscipline)
testRouter.get("/tests/teachers", validateToken, testController.getTestsByTeacher)

export default testRouter