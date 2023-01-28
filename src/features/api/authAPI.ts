import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
    reducerPath:'authAPI',
    tagTypes:['Users'],
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api/users/'}),
    endpoints: builder=>({
        getUserById: builder.query({
            query:(getUserById:string)=>`${getUserById}`,
            providesTags: (result,error,id:string) => result
            ?   [
                    ...result.map((id:string)=>({type:'Users',id})),
                    {type:"Users",id:"LIST"},
                ]
            :   [{type:"Users",id:"LIST"}],
        }),
        getAllUsers: builder.mutation({
            query:() =>({
                url:'',
                method:'POST',
                body:{
                    "filter":{

                    },
                    "page":0,
                    "limit":10,
                },
                
            }),
            invalidatesTags:[{type:"Users",id:"LIST"}]
        }),
        deleteUserById: builder.mutation({
            query:(id:string)=>({
                url:`${id}`,
                method:'DELETE'
            }),
            invalidatesTags:[{type:"Users",id:"LIST"}]
        })
        /*
        getTaskFromTaskpage: build.mutation({
            query:(page:number = 0) =>({
                url:'НУЖНЫЙ АДРЕСС',
                method:'POST',
                body:{
                    "filter":{
                        
                    },
                    "page":page,
                    "limit":10
                }
            })
        })
        */
    })
})

export const {useGetUserByIdQuery,useGetAllUsersMutation,useDeleteUserByIdMutation} = authAPI
