import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../models"

export const jsonApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["posts"],
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], void>({
      query: () => ({
        url: "/posts",
      }),
      providesTags: (_) => ["posts"],
    }),

    addPost: build.mutation<any, IPost>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["posts"],
    }),
  }),
})

export const { useFetchPostsQuery, useAddPostMutation } = jsonApi
