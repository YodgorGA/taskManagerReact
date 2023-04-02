import { RootState } from './../../../app/store/index';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "../lib/types";
import { REHYDRATE } from 'reduxjs-toolkit-persist';

export interface userSliceState{
    currentUser: UserInfo | null,
    allUsers: [
        UserInfo
    ] | null
}

const initialState:userSliceState = {
    currentUser:null,
    allUsers: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setCurrentUser:(state,action:PayloadAction<UserInfo>)=>{
            state.currentUser = action.payload
        },
        removeCurrentUser:(state)=>{
            state.currentUser = null
        }
    },
})

export const {removeCurrentUser,setCurrentUser,} = userSlice.actions

export const selectUser = (state:RootState) =>state.user