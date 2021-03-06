import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js"
import signUpSchema from "../schemas/signUpSchema.js"
import signInSchema from "../schemas/signInSchema.js"
import * as userController from "../controllers/userController.js"
import {validateToken} from "../middlewares/validateTokenMiddleware.js"

const userRouter = Router()

userRouter.post("/sign-up", validateSchema(signUpSchema), userController.create)
userRouter.post("/sign-in", validateSchema(signInSchema), userController.signIn)
userRouter.delete("/logout", validateToken, userController.logout)

export default userRouter