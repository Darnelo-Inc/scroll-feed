import { RootState } from ".."
import { useAppSelector } from "../../hooks/useRedux"

export const selectPosts = (state: RootState) => state.posts.posts
