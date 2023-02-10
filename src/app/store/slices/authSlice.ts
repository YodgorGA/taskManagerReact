import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../index';

interface AuthSliceProps{
    isUserLoggedIn:boolean
    loggedUserLogin:string
    token:string,
    id:string,
}

const initialState:AuthSliceProps = {
    isUserLoggedIn:false,
    loggedUserLogin:'',
    id:'',
    token:''
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setIsUserLoggedIn: (state,action:PayloadAction<boolean>)=>{
            state.isUserLoggedIn = action.payload
        },
        setUserLogin: (state,action:PayloadAction<string>)=>{
            state.loggedUserLogin = action.payload
        },
        removeLoggedUser: (state)=>{
            state.isUserLoggedIn = false;
            state.loggedUserLogin = '';
        }
        
    }
})

export const {setIsUserLoggedIn,setUserLogin,removeLoggedUser} = authSlice.actions

export const selectAuthInfo = (state:RootState) => state.auth