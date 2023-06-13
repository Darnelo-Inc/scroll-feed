import { jsonApi } from "./../API/jsonApi"
import { configureStore } from "@reduxjs/toolkit"
import postsSlice from "./reducers/postsSlice"

export const store = configureStore({
  reducer: { posts: postsSlice, [jsonApi.reducerPath]: jsonApi.reducer },
  middleware: (gdm) => gdm().concat(jsonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
