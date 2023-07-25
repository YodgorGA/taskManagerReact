import { CommentItem as TaskCommentItem } from "./UI/CommentItem";
import type {comment,taskComments,newCommentQueryArgs,editCommentQueryArgs} from './lib/types'
import {useAddNewCommentMutation,useDeleteCommentMutation,useEditCommentMutation,useGetAllCommentsQuery,commentApi} from './model/commentApi'
export {
    //UI
    TaskCommentItem,
    //types
    comment,taskComments,newCommentQueryArgs,editCommentQueryArgs,
    //api
    commentApi,
    //apiReducers
    useAddNewCommentMutation,useDeleteCommentMutation,useEditCommentMutation,useGetAllCommentsQuery,
 }