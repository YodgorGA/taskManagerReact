import {UserListContentLVItem} from './UI/userList/listView/UserListContentLVItem';
import {UserListContentCVItem} from './UI/userList/cardView/UserListContentCVItem';
import { UserPageTaskItem as UserPageTaskListItem } from './UI/userPage/UserPageTaskItem';

import {useGetUserAuthDataMutation,useGetUserByIdQuery,useGetUsersAllQuery,userApi,useGetUserByNicknameMutation} from './model/userApi';

import { userSlice,setCurrentUser,removeCurrentUser, type userSliceState} from './model/userSlice';

import { useUserIsAuth,useUserState } from './model/selectors';

import type {UserInfo,AuthInfo} from './lib/types'

export {
    //UI
    UserListContentCVItem,
    UserListContentLVItem,
    UserPageTaskListItem,
    //model
        //userApi
        useGetUserAuthDataMutation,useGetUserByIdQuery,useGetUsersAllQuery,useGetUserByNicknameMutation,
        //types
        UserInfo,AuthInfo,userSliceState,
        //api
        userApi,
        //slice
        userSlice,
        //slice actions,
        removeCurrentUser,setCurrentUser,
        //selectors
        useUserIsAuth,useUserState,


} 