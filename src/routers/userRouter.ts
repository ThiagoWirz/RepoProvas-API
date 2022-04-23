import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js"
import signUpSchema from "../schemas/signUpSchema.js"
import * as userController from "../controllers/userController.js"

const userRouter = Router()

userRouter.post("/sign-up", validateSchema(signUpSchema), userController.create)

export default userRouter