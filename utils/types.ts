export interface Routes{
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Register{
    _id?: number
    email: string
    password: string
    success: boolean
}