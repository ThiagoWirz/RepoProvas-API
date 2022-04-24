import { client } from "../database.js";
import * as models from "../models/index.js";

export async function createSession(data: models.CreateSession) {
 await client.session.create({
   data
 })
}

export async function find(id: number) {
  const session = await client.session.findUnique({
    where:{
      id
    }
  })

  return session
}