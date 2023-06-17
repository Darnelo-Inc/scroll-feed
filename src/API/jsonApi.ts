import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost, IUser } from "../models"

export const jsonApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["posts"],
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], string>({
      query: (id: string) => ({
        url: "/posts" + id,
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

    fetchUsers: build.query<IUser[], void>({
      query: () => ({ url: "/users" }),
      transformResponse: (response: any) => {
        const data = response as IUser[]
        return data.map(({ id, name }) => ({ id, name }))
      },
    }),
  }),
})

export const { useFetchPostsQuery, useAddPostMutation, useFetchUsersQuery } =
  jsonApi
