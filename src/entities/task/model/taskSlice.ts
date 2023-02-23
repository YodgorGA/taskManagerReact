import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "app/store"
import { Task } from "../lib/types"

export interface taskSliceState{
    tasks:[
        Task
    ] | null
}

const initialState:taskSliceState = {
    tasks:null
}

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        setAllTasks: (state,action:PayloadAction<[Task]>) =>{
            state.tasks = action.payload
        },
    }
})


export const {setAllTasks} = taskSlice.actions

export const selectTaskInfo = (state:RootState) => state.task