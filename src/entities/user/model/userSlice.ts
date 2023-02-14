import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from 'app/store/index';

interface userSliceProps{
    username:string | null,
    about:string | null,
    id:string | null,
    photoUrl:string | null
}

const initialState:userSliceProps = {
    username:null,
    about:null,
    id:null,
    photoUrl:null
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action:PayloadAction<userSliceProps>)=>{
            state.username = action.payload.username
            state.about = action.payload.about
            state.photoUrl = action.payload.photoUrl
            state.id = action.payload.id
        },
        removeLoggedUser: (state)=>{
            state.username = null
            state.about = null
            state.photoUrl = null
            state.id = null
        }
        
    }
})

export const {setUser,removeLoggedUser} = userSlice.actions

export const selectuserInfo = (state:RootState) => state.user