import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Task } from "../lib/types";

type Tasks = {
    data: [Task]
}

export const taskApi = createApi({
    reducerPath:'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api/tasks'}),
    endpoints: (build) =>({
        getTasksAll:build.mutation<Tasks,object>({
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
    useGetTasksAllMutation
} = taskApi