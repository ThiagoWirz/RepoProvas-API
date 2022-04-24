import * as authRepository from "../repositories/authRepository.js"

export async function createSession(userId: number, token: string) {
  await authRepository.createSession({userId, token})
}

