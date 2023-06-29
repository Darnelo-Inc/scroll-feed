import { RootState } from ".."

export const selectPosts = (state: RootState) => state.posts.posts

export const selectModal = (state: RootState) => state.modal
