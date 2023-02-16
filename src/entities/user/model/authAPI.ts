import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface userAuthData{
    username:string,
    id:string,
    photoUrl:string,
    about:string
}

export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery: fetchBaseQuery ({baseUrl:'http://localhost:3000/api/users/'}),
    endpoints: (build) =>({
        getUserAuthData:build.mutation<userAuthData,object>({
            query: (body) =>({
                url:'login',
                method:"POST",
                body
            })
        })
    })
})

export const {
    useGetUserAuthDataMutation
} = authApi