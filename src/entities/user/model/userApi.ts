import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface userData{
    username:string,
    id:string,
    photoUrl:string,
    about:string
}

export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery ({baseUrl:'http://localhost:3000/api/users/'}),
    tagTypes: ['User','Users'],
    endpoints: (build) =>({
        getUserAuthData:build.mutation<userData,{}>({
            query: (body) =>({
                url:'login',
                method:"POST",
                body
            }),
            invalidatesTags: [{ type: 'User', id: 'CURRENT_USER' }],
        }),
        getUserById:build.query<userData,string>({
            query: (id) => ''+id
        }),
        getUsersAll:build.query<userData[],string>({
            query: () => 'all',
            providesTags: (result) =>
            result
            ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
            : [{ type: 'Users', id: 'LIST' }],
        })
    })
})

export const {
    useGetUserAuthDataMutation,
    useGetUserByIdQuery,
    useGetUsersAllQuery
} = userApi