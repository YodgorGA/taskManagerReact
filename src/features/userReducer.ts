import { useAppSelector } from '../redux/hooks';
import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../redux/store';
import axios from 'axios';
import { IUser, IUsers } from '../types/types';

export interface UserState {
    isUserLoggedIn:boolean,
    authorisedUser:IUser
}

const initialState: UserState = {
    isUserLoggedIn: false,
    authorisedUser:{}
};

export const getUserData = createAsyncThunk(
      'users/getUserData',
      async (userLogin: string) => {
        const response = await axios.post('http://localhost:3000/api/users',{
            "filter":{
                "query":userLogin
            },
            "page":0,
            "limit":10,
        });
        const usersData:IUsers = await response.data;
        return usersData;
      }
    );

export const userInfo = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getIsUserLoggedIn: (state,action:PayloadAction<boolean>)=>{
            state.isUserLoggedIn = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.fulfilled, (state,action:PayloadAction<Object>) => {
            console.log(action.payload);
        })
    }
});

export const fetchUserById = (userId:string) => async (dispatch:Dispatch) =>{
    const responce = await axios.get('http://localhost:3000/api/users/'+userId);
    dispatch(getIsUserLoggedIn(true));
}

export const 
{ 
    getIsUserLoggedIn,
} = userInfo.actions;

export const selectUserInfoState = (state: RootState) => state.user;

export default userInfo.reducer;
