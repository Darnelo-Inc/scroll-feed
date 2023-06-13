import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../models"

export const jsonApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], void>({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
})

export const { useFetchPostsQuery } = jsonApi
