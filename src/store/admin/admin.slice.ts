import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {UserModel} from "../../api/model/user.model";

interface AdminSlice {
    users: UserModel[]
}

const initialState: AdminSlice = {
    users: [],
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserModel[]>) => {
            state.users = action.payload;
        },
    }
})
export const {
    setUsers
} = adminSlice.actions

export const selectUsers = (state: RootState) => state.admin.users

export const adminReducer = adminSlice.reducer;
