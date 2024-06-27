import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Users } from '../types/usersTypes';
import { fetchTopUsersBySize, fetchUserBySearch } from '../services';
import { AsyncThunk, AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';

interface UsersState {
    loading: boolean;
    users: Users | null;
    error: string | null;
}

const initialState: UsersState = {
    loading: false,
    users: null,
    error: null,
};

export const getTopUsersBySize = createAsyncThunk(
    'users/getTopUsers',
    async (size: number = 30): Promise<Users> => {
        const users = await fetchTopUsersBySize(size);
        return users;
    }
);

export const getUsersBySearch = createAsyncThunk('users/getUsersBySearch', async (userName: string): Promise<Users> => {
    const users = await fetchUserBySearch(userName);
    return users
})

// TODO: To make this generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleAsyncActions = (builder: ActionReducerMapBuilder<UsersState>, asyncThunk: AsyncThunk<Users, any, AsyncThunkConfig>) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Oops something went wrong';
        });
};



const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toogleUserLike: (state, action) => {
            const userId = action.payload;
            if (!state.users) {
                return; // If users data is null, return state as is
            }
            const updatedUsers = state.users.items.map((user) => {
                if (user.id === userId) {
                    return {
                        ...user,
                        isLiked: !user.isLiked, // Toggle the liked property
                    };
                }
                return user;
            });
            state.users.items = updatedUsers;
        },
    },
    extraReducers: (builder) => {
        handleAsyncActions(builder, getTopUsersBySize);
        handleAsyncActions(builder, getUsersBySearch);
    },
});

export const usersReducer = userSlice.reducer;
export const { toogleUserLike } = userSlice.actions;
export default userSlice;
