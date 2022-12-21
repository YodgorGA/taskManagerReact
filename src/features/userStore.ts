import { useAppSelector } from '../redux/hooks';
import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../redux/store';
import axios from 'axios';

export interface UserState {
    isUserLoggedIn:boolean,
    login:string,
    userName:string,
    userBio:string,
    userPhotoUrl:string,
}

const initialState: UserState = {
  isUserLoggedIn: false,
  login:'',
  userName:'',
  userBio:'',
  userPhotoUrl:''
};



export const userInfo = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getIsUserLoggedIn: (state,action:PayloadAction<boolean>)=>{
            state.isUserLoggedIn = action.payload;
        },
        getLogin:(state,action:PayloadAction<string>)=>{
            state.login = action.payload
        },
        getUserName:(state,action:PayloadAction<string>)=>{
            state.userName = action.payload
        },
        getUserBio:(state,action:PayloadAction<string>)=>{
            state.userBio = action.payload
        },
        getUserPhotoUrl:(state,action:PayloadAction<string>)=>{
            state.userPhotoUrl = action.payload
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(getUserData.fulfilled, (state) => {
            
        // })
    }
});

export const fetchUserById = (userId:string) => async (dispatch:Dispatch) =>{
    const responce = await axios.get('http://localhost/users/'+userId);
    dispatch(getIsUserLoggedIn(true));
}

export const 
{ 
    getIsUserLoggedIn,getLogin,
    getUserName,getUserBio,getUserPhotoUrl
} 
    = userInfo.actions;

export const selectUserInfoState = (state: RootState) => state.user;

export default userInfo.reducer;
