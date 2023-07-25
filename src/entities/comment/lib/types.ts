export type comment = {
    id:string,
    taskId:string,
    userId:string,
    text:string,
    dateOfCreation:string,
    dateOfUpdate:string
}

export type newCommentQueryArgs = {
    taskId:string,
    userId:string,
    text:string,
}

export type editCommentQueryArgs = {
    id:string,
    taskId:string,
    userId:string,
    text:string,
}


export type taskComments = {
    data:[comment]
}

export {}