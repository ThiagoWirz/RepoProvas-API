export interface User {
  id: number,
  email: string,
  password: string
}

export type UserSignUp = Omit<User, "id">