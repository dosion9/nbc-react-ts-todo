import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";
import modalSlice from "..//modules/modalSlice";

export const store = configureStore({
  reducer: { todoSlice, modalSlice }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
