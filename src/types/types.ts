export interface IUser extends Object{
    about?:string,
    id?:string,
    login?:string,
    password?:string,
    photoUrl?:string,
    username?:string
}

export interface IUsers extends Object{
    [key:number]:{userData:IUser}
    limit:number,
    page:number,
    total:number
}

export {}