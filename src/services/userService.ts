import * as userRepositories from "../repositories/userRepository.js"
import bcrypt from "bcrypt"

export async function create(email:string , password:string) {
  await findByEmail(email)
  const hashPassword = hashData(password)

  await userRepositories.create({email, password: hashPassword})

}

export async function findByEmail(email: string) {
 const user = await userRepositories.findByEmail(email)
 if(user){
  throw{ type: "unauthorized", message: "Email already registered"}
 }
}

export function hashData(data:string){
  const hashData = bcrypt.hashSync(data, 10)

  return hashData
}