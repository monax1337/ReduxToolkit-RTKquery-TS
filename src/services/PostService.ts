import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchAllPosts:build.query({
            query:() => ({
                url: '/posts'
            })
        })
    })
})