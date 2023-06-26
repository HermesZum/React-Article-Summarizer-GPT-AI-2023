import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api_key = import.meta.env.VITE_MY_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", api_key);
            headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
});

export const {useLazyGetSummaryQuery} = articleApi;