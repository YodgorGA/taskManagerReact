export type Task = {
    id: string
    userId: string,
    assignedId: string,
    title: string,
    description: string,
    type: 'task'|'bug',
    dateOfCreation: string,
    dateOfUpdate: string,
    timeInMinutes: number,
    status: 'opened'|'testing'|'inProgress'|'complete',
    rank: 'low'|'medium'|'high'
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

export type dataForTaskEdit = {
    id:string| undefined,
    userId:string | undefined,
    assignedId:string | undefined,
    title:string | undefined,
    description:string | undefined,
    type:string | undefined,
    rank:string | undefined,
    status:string | undefined
}