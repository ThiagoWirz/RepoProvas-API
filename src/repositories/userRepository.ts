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

export async function create(data: models.UserSignIn) {
  await client.user.create({
    data
  })
}