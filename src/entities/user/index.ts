import {UserListContentLVItem} from './UI/userList/listView/UserListContentLVItem';
import {UserListContentCVItem} from './UI/userList/cardView/UserListContentCVItem';
import { UserPageTaskItem as UserPageTaskListItem } from './UI/userPage/UserPageTaskItem';

import {useUser,useUserIsAuth} from './model/selectors';
import { useGetUserAuthDataMutation,authApi } from './model/authAPI';
import {setUser,removeLoggedUser,userSlice} from './model/userSlice';

import type {UserInfo,AuthInfo} from './lib/types'

export {
    UserListContentCVItem,
    UserListContentLVItem,
    UserPageTaskListItem,
    removeLoggedUser,
    setUser,
    authApi,
    userSlice,
    useGetUserAuthDataMutation,useUser,useUserIsAuth,
    UserInfo,AuthInfo,
} 