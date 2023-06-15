import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "./useRedux"
import { postsSlice } from "../store/reducers/postsSlice"
import { modalSlice } from "store/reducers/modalSlice"

const actions = {
  ...postsSlice.actions,
  ...modalSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
