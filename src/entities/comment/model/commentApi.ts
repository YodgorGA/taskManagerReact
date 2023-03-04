import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { comment, editCommentQueryArgs, newCommentQueryArgs, taskComments } from '../lib/types';

interface Comments {

}

export const commentApi = createApi({
    reducerPath:'commentApi',
    baseQuery: fetchBaseQuery ({baseUrl:'http://localhost:3000/api/comments/'}),
    tagTypes: ['Comments'],
    endpoints: (build) =>({
        addNewComment:build.mutation<comment,newCommentQueryArgs>({
            query:(body)=>({
                url:"createOrEdit",
                method:'PUT',
                body
            }),
            invalidatesTags:['Comments']
        }),
        editComment:build.mutation<comment,editCommentQueryArgs>({
            query:(body)=>({
                url:'createOrEdit',
                method:"PUT",
                body
            }),
            invalidatesTags:["Comments"]
        }),
        getAllComments:build.query<[comment],string>({
            query:(taskId)=>taskId,
            providesTags:["Comments"],
        }),
        deleteComment:build.mutation<string,string>({
            query:(commentId)=>({
                url:commentId,
                method:"DELETE",
            }),
            invalidatesTags:['Comments']
        })
    })
})

export const {
    useAddNewCommentMutation,useDeleteCommentMutation,useEditCommentMutation,useGetAllCommentsQuery
} = commentApi