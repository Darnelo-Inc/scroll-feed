import { createSlice } from "@reduxjs/toolkit"
import { IPosts } from "../../models"

const initialState: IPosts = {
  posts: [],
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  },
})
