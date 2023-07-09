import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IComment, IPost, IUser } from "../models"

export const jsonApi = createApi({
  reducerPath: "jsonPlaceholder",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["posts", "comments"],
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], string>({
      query: (id: string) => ({
        url: "posts" + id,
      }),
      providesTags: (_) => ["posts"],
    }),

    addPost: build.mutation<any, IPost>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["posts"],
    }),

    fetchUsers: build.query<IUser[], void>({
      query: () => ({ url: "users" }),
      transformResponse: (response: IUser[]) => {
        return response.map(({ id, name, email }) => ({ id, name, email }))
      },
    }),

    fetchPost: build.query<IPost, string>({
      query: (id: string) => ({ url: `posts/${id}` }),
    }),

    fetchComments: build.query<IComment[], any>({
      query: (id: string) => ({
        url: `posts/${id}/comments`,
      }),
      providesTags: (_) => ["posts"],
    }),

    addComment: build.mutation<any, any>({
      query: ({ comment }) => ({
        url: "comments",
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["comments"],
    }),
  }),
})

export const {
  useFetchPostQuery,
  useFetchPostsQuery,
  useFetchUsersQuery,
  useFetchCommentsQuery,
  useAddPostMutation,
  useAddCommentMutation,
} = jsonApi
