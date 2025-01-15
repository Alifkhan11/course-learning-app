export type TLogin = {
    email: string
    password: string
}

export type TRegister = {
    name: string
    password: string
    email: string
    role: 'student' | 'teacher'
    isDeleted: boolean
}