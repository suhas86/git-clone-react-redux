import { configureStore } from "@reduxjs/toolkit";
import { reposReducer } from "../reducers/reposReducer";
import { usersReducer } from "../features/userSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        repos: reposReducer,
    }
})

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;