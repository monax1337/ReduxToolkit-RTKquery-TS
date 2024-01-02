import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

function getErrorMessege(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

// export const fetchUsers = ():any => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             dispatch(userSlice.actions.userFetching());
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//             dispatch(userSlice.actions.userFetchingSuccess(response.data));
//         } catch (e) {
//             dispatch(userSlice.actions.userFetchingError(getErrorMessege(e)))
//         }
//     }
// }

export const fetchUsers:any = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователь")
        }
    }
)