import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Task,changeTaskStatusQuery, taskFilterParams } from "../lib/types";

export type Tasks = {
    data: [Task]
}

export const taskApi = createApi({
    reducerPath:'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api/tasks'}),
    tagTypes: ['Tasks','Task'],
    endpoints: (build) =>({
        getTasksAll:build.mutation<Tasks,object>({
            query: () =>({
                url:'',
                method:"POST",
                body:{
                    filter: {},
                    page: 0,
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
        getTaskListByFilter:build.mutation<Tasks,taskFilterParams>({
            query: (args)=>({
                url:'',
                method:'POST',
                body:{
                    filter:{
                        query:args.title,
                        assignedUsers:args.assignedId,
                        type:args.type,
                        status:args.status,
                        rank:args.rank
                    },
                    page:0,
                    limit:8
                }
            }),
            invalidatesTags: ['Task'],
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
    useGetTaskListByFilterMutation,
    useChangeTaskStausMutation,
} = taskApi