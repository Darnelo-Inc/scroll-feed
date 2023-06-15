import { createSlice } from "@reduxjs/toolkit"
import { IModal } from "models"

const initialState: IModal = {
  visible: false,
}

export const modalSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleVisible: (state) => {
      state.visible = !state.visible
    },
  },
})

export default modalSlice.reducer
