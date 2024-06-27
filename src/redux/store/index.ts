import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../features/userSlice";
import { reposReducer } from "../features/repoSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        repos: reposReducer,
    }
})

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;