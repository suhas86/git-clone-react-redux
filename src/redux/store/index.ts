import { Dispatch, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducers/userReducer";
import { reposReducer } from "../reducers/reposReducer";
import { UserActions } from "../actions/users/types";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        repos: reposReducer,
    }
})

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch & Dispatch<UserActions>;