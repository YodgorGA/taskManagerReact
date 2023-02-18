import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "app/store"
import { ITask } from "../lib/types/types"

interface taskSliceProps{
    tasks:[
        ITask
    ] | null
}

const initialState:taskSliceProps = {
    tasks:null
}

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        setAllTasks: (state,action:PayloadAction<[ITask]>) =>{
            state.tasks = action.payload
        },
    }
})


export const {setAllTasks,} = taskSlice.actions

export const selectTaskInfo = (state:RootState) => state.task