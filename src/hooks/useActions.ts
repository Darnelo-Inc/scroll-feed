import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "./useRedux"

const actions = {}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
