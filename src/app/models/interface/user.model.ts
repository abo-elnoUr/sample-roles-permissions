import { Role } from "./role.interface"

export interface User {
    id: number
    name: string
    userName: string
    password: string
    role: Role
}