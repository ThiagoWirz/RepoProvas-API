import { client } from "../database.js";
import * as models from "../models/index.js";

export async function createSession(data: models.CreateSession) {
 await client.session.create({
   data
 })
}

export async function find(token: string) {
  const session = await client.session.findFirst({
    where:{
      token
    }
  })

  return session
}

export async function deleteSession(token: string) {
  await client.session.delete({
    where:{
      token
    }
  })
}