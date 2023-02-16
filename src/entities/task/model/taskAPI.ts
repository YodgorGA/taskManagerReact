import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITask } from "../lib/types/types";

interface ITasks{
    tasks: ITask[]
}



export const taskApi = createApi({
    reducerPath:'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api/tasks'}),
    endpoints: (build) =>({
        getAllTasks:build.mutation<ITasks,object>({
            query: () =>({
                url:'',
                method:"POST",
                body:{
                    filter: {},
                    page: 0,
                    limit: 8
                }
                
            })
        })
    })
})

export const {
    useGetAllTasksMutation
} = taskApi