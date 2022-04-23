export interface User {
  id: number,
  email: string,
  password: string
}

export type UserSignIn = Omit<User, "id">