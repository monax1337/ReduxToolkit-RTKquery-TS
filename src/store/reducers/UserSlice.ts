import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreator";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // userFetching(state) {
        //     state.isLoading = true;
        // },
        // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        // userFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchUsers.fulfilled,
            (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            }
        );
        builder.addCase(
            fetchUsers.pending,
            (state) => {
                state.isLoading = true;
            }
        );
        builder.addCase(
            fetchUsers.rejected,
            (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
        // [fetchUsers.fulfilled.type]: (state:UserState, action: PayloadAction<IUser[]>) => {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        // [fetchUsers.pending.type]: (state:UserState) => {
        //     state.isLoading = true;
        // },
        // [fetchUsers.rejected.type]: (state:UserState, action: PayloadAction<string>) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    }
})

export default userSlice.reducer;