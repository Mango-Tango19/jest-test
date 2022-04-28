
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://images-api.nasa.gov'
    }),
    endpoints(builder) {
        return {
            fetchSearch: builder.query({
                query(term = 'apollo') {
                    return `/search?q=${term}&media_type=image`
                }
            })
        }
    }
})

export const { useFetchSearchQuery } = apiSlice