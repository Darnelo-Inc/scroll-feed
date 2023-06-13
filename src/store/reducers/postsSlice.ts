import { createSlice } from "@reduxjs/toolkit"
import { IPosts } from "../../models"

const initialState: IPosts = {
  posts: [
    { id: 1, title: "Post-1", desc: "Desc-1" },
    { id: 2, title: "Post-2", desc: "Desc-2" },
    { id: 3, title: "Post-3", desc: "Desc-3" },
  ],
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

export default postsSlice.reducer
