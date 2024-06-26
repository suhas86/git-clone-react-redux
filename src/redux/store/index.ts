import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducers/userReducer";
import { reposReducer } from "../reducers/reposReducer";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        repos: reposReducer,
    }
})

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;