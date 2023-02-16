export interface ITask{
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
