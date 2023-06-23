import { Payload } from "../types/Payoad"
import { User } from "../types/User"

const BASE_URL = "http://localhost:4504/v1/api/"

export const sendSmsCode = async (phone: string)
: Promise<Payload<{code: string}>> => {
  const res = await fetch(`${BASE_URL}auth/sendsms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone })
  })
  return await res.json()
}

export const preRegister = async (
  user: User
): Promise<Payload<User>> => {
  const res = await fetch(`${BASE_URL}auth/pre-register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  return await res.json()
}

export const register = async (
  user: User
): Promise<Payload<User>> => {
  const res = await fetch(`${BASE_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  return await res.json()
}

export const login = async (
  user: User
): Promise<Payload<{
  code: string, 
  user: User
}>> => {
  const res = await fetch(`${BASE_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  return await res.json()
}