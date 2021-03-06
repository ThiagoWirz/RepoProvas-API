import * as models from "../models/index.js"
import * as userRepositories from "../repositories/userRepository.js"
import * as hashUtils from "../utils/hashUtils.js"
import * as authUtils from "../utils/authUtils.js"
import dotenv from "dotenv"
dotenv.config()

export async function create(email:string , password:string) {
  const user = await findByEmail(email)
  if(user){
    throw{ type: "conflict", message: "Email already registered"}
   }
  const hashPassword = hashUtils.hashData(password)

  await userRepositories.create({email, password: hashPassword})

}

export async function signIn({email, password}: models.UserData) {
  const user = await userRepositories.findByEmail(email)
  if(!user){
    throw{ type: "not_found", message: "user not found"}
  }
  confirmPassword(password, user.password)
  const token = authUtils.createToken(user)
 
  delete user.password
  return {...user, token}
}

export async function findByEmail(email: string) {
 const user = await userRepositories.findByEmail(email)
 
 return user
}

export function confirmPassword(password: string, hashPassword: string){
  const isPasswordValid = hashUtils.compareHash(password, hashPassword)
 if(!isPasswordValid){
   throw{ type: "unauthorized", message: "wrong password" }
 }
}