import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "./useRedux"
import { postsSlice } from "../store/reducers/postsSlice"

const actions = {
  ...postsSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
