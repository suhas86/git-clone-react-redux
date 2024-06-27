import { ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Repos } from "../types/repoTypes";
import { fetchRepoBySearch, fetchReposByUserName } from "../services";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

interface ReposState {
    loading: boolean;
    repos: Repos[] | null;
    error: string | null;
}

const initialState: ReposState = {
    loading: false,
    repos: null,
    error: null,
};

// TODO: To make this generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleAsyncActions = (builder: ActionReducerMapBuilder<ReposState>, asyncThunk: AsyncThunk<Repos[], any, AsyncThunkConfig>) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            state.repos = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Oops something went wrong';
        });
};
export const getReposByUserName = createAsyncThunk('repos/getReposByName', async (userName: string): Promise<Repos[]> => {
    const repos = await fetchReposByUserName(userName);
    return repos
});

export const getReposBySearch = createAsyncThunk('repos/getReposBySearch', async ({ userName, text }: { userName: string, text: string }): Promise<Repos[]> => {
    const repos = await fetchRepoBySearch(userName, text);
    return repos?.items
});

const repoSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getReposByUserName);
        handleAsyncActions(builder, getReposBySearch);
    }
})

export const reposReducer = repoSlice.reducer;
export default repoSlice;
