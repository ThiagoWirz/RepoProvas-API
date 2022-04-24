export interface User {
  id: number,
  email: string,
  password: string
}

export type UserSignIn = Omit<User, "id">

export interface Session {
  id: number,
  token: string,
  userId: number
}

export type CreateSession = Omit<Session, "id">