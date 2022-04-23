import bcrypt from "bcrypt"

export function hashData(data:string){
  const hashData = bcrypt.hashSync(data, 10)

  return hashData
}

export function compareHash(data: string, hashData: string){
  const isValid = bcrypt.compareSync(data, hashData)

  return isValid
}