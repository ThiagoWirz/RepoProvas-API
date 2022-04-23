import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js"
import signUpSchema from "../schemas/signUpSchema.js"
import signInSchema from "../schemas/signInSchema.js"
import * as userController from "../controllers/userController.js"

const userRouter = Router()

userRouter.post("/sign-up", validateSchema(signUpSchema), userController.create)
userRouter.post("/sign-in", validateSchema(signInSchema), userController.signIn)

export default userRouter