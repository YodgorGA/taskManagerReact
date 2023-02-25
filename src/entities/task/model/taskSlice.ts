import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "app/store"
import { Task, taskFilterParams } from "../lib/types"

export interface taskSliceState{
    taskFilterParams:taskFilterParams
}

const initialState:taskSliceState = {
    taskFilterParams:{}
}

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        setTaskFilterParams: (state,action:PayloadAction<taskFilterParams>) =>{
            state.taskFilterParams = action.payload
        },
    }
})


export const {setTaskFilterParams} = taskSlice.actions

export const selectTaskInfo = (state:RootState) => state.task