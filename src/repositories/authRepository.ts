import { client } from "../database.js";
import * as models from "../models/index.js";

export async function createSession(data: models.CreateSession) {
 await client.session.create({
   data
 })
}

export async function find(userId: number) {
  const session = await client.session.findFirst({
    where:{
      userId
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