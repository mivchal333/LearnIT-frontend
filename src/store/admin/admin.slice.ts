import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {UserDetails} from "../../api/model/userDetails";

interface AdminSlice {
    users: UserDetails[]
}

const initialState: AdminSlice = {
    users: [],
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserDetails[]>) => {
            state.users = action.payload;
        },
    }
})
export const {
    setUsers
} = adminSlice.actions

export const selectUsers = (state: RootState) => state.admin.users

export const adminReducer = adminSlice.reducer;
