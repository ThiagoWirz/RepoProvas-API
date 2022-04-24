import { client } from "../database.js";
import * as models from "../models/index.js";

export async function findByEmail(email:string) {
  const user = await client.user.findUnique({
    where:{
      email
    }
  })

  return user
}

export async function create(data: models.UserData) {
  await client.user.create({
    data
  })
}

export async function findById(id: number) {
  const user =await client.user.findUnique({
    where:{
      id
    }
  })
  return user
}