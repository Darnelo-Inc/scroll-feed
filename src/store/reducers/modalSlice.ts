import { createSlice } from "@reduxjs/toolkit"
import { IModal } from "models"

const initialState: IModal = {
  postModal: false,
  commentModal: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    togglePostModal: (state) => {
      state.postModal = !state.postModal
    },

    toggleCommentModal: (state) => {
      state.commentModal = !state.commentModal
    },
  },
})
