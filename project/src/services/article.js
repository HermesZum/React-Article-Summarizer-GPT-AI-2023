import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const articleApi = createApi({
    reducerPath: "articleApi",
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `article/summary/${params.id}`,
        }),
    }),
});