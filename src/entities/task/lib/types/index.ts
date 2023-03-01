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
    query?:string,
    assignedUsers?:string,
    status?:string,
    rank?:string
}

export type taskFilterBody = {
    filter:taskFilterParams,
    page:number,
    limit:number,
}

export type dataForTaskCreation = {
    userId:string | undefined,
    assignedId:string | undefined,
    title:string | undefined,
    description:string | undefined,
    type:string | undefined,
    rank:string | undefined
}

export type addWorkTimeResponce = {
    task:Task,
    comment: null | string
}

export type addWorkTimeBody = {
    timeInMinutes:number,
    currentUser:string
}

export type addWorkTimeQueryParams = {
    id:string,
    body:addWorkTimeBody
}