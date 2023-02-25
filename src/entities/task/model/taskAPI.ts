import { taskFilterBody } from './../lib/types/index';
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Task,changeTaskStatusQuery, taskFilterParams } from "../lib/types";

export type Tasks = {
    data: [Task],
    page: number,
    total: number
}

export const taskApi = createApi({
    reducerPath:'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api/tasks'}),
    tagTypes: ['Tasks','Task'],
    endpoints: (build) =>({
        getTasksAll:build.mutation<Tasks,number>({
            query: (page) =>({
                url:'',
                method:"POST",
                body:{
                    filter: {},
                    page: page,
                    limit: 8
                },
                providesTags: (result:Task[]) =>
                result
                ? [...result.map(({ id }) => ({ type: 'Task' as const, id })), 'Task']
                : ['Task'],
            }),
        }),
        getTaskById:build.query<Task,string>({
            query: (id) => id,
            providesTags: ['Task']
        }),
        getTaskList:build.mutation<Tasks,taskFilterBody>({
            query:(body)=>({
                url:'',
                method:'POST',
                body
            }),
            invalidatesTags: ['Tasks'],
        }),
        changeTaskStaus:build.mutation<Task | Object,changeTaskStatusQuery>({
            query: (query:changeTaskStatusQuery) =>({
                url:`${query.id}/status/${query.status}`,
                method:"PATCH",
            }),
            invalidatesTags: ['Task'],
        }),
    })
})

export const {
    useGetTasksAllMutation,
    useGetTaskByIdQuery,
    useChangeTaskStausMutation,
    useGetTaskListMutation,
} = taskApi