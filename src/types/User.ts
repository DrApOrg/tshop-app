export interface User {
  id?: string
  phone?: string
  accountType?: string
  firstName?: string
  lastName?: string
  name?: string
  dni?: string
  email?: string
  password?: string
  birthday?: string
}

export const EmptyUser: User = {} as User