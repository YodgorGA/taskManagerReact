import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { UserInfo } from '../lib/types';

interface Users extends Array<UserInfo>{
    data:[
        UserInfo
    ]
}

export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery ({baseUrl:'http://localhost:3000/api/users/'}),
    tagTypes: ['User','Users'],
    endpoints: (build) =>({
        getUserAuthData:build.mutation<UserInfo,{}>({
            query: (body) =>({
                url:'login',
                method:"POST",
                body
            }),
            invalidatesTags: [{ type: 'User', id: 'CURRENT_USER' }],
        }),
        getUserById:build.query<UserInfo,string>({
            query: (id) => id,
            providesTags: ['User']
        }),
        getUsersAll:build.query<UserInfo[],void>({
            query: () => 'all',
            providesTags: (result) =>
            result
            ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
            : [{ type: 'Users', id: 'LIST' }],
        }),
        getUserByNickname:build.mutation<Users,string>({
            query: (username)=>({
                url:'',
                method:"POST",
                body:{
                    filter:{
                        query:username
                    },
                    page:0,
                    limit:1
                }
            }),
            invalidatesTags:['User']
        })
    })
})

export const {
    useGetUserAuthDataMutation,
    useGetUserByIdQuery,
    useGetUsersAllQuery,
    useGetUserByNicknameMutation,
} = userApi