import * as authRepository from "../repositories/authRepository.js"

export async function createSession(userId: number, token: string) {
  await authRepository.createSession({userId, token})
}

export async function deleteSession(sessionId: number) {
  await authRepository.deleteSession(sessionId)
}

