import { addWorkTimeBody } from './../lib/types/index';
import { dataForTaskCreation, taskFilterBody, addWorkTimeResponce, addWorkTimeQueryParams } from './../lib/types';
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Task,changeTaskStatusQuery } from "../lib/types";

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
        addTask:build.mutation<Task,dataForTaskCreation>({
            query:(body:dataForTaskCreation) =>({
                url:`createOrEdit`,
                method:"PUT",
                body
            }),
            invalidatesTags: ['Task'],
        }),
        addWorkTime:build.mutation<addWorkTimeResponce,addWorkTimeQueryParams>({
            query:(req:addWorkTimeQueryParams) =>({
                url:`/${req.id}/worktime`,
                method:"PATCH",
                body: req.body,
            }),
            invalidatesTags : ['Task']
        })
    })
})

export const {
    useGetTaskByIdQuery,
    useChangeTaskStausMutation,
    useGetTaskListMutation,
    useAddTaskMutation,
    useAddWorkTimeMutation,
} = taskApi