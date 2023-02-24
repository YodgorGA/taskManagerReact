export type Task = {
    id: string
    userId: string,
    assignedId: string,
    title: string,
    description: string,
    type: string,
    dateOfCreation: string,
    dateOfUpdate: string,
    timeInMinutes: number,
    status: string,
    rank: string
}

export type changeTaskStatusQuery = {
    id:string,
    status:string
}

export type taskFilterParams = {
        type?:string,
        title?:string,
        assignedUser?:string,
        status?:string,
        rank?:string
}


