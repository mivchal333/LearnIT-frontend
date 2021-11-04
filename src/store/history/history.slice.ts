import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {UserAttempt} from "../../api/model/userAttempt.model";

interface UserHistorySlice {
    [technologyId: number]: UserAttempt[]
}

const initialState: UserHistorySlice = {}

const userHistorySlice = createSlice({
    name: 'userHistory',
    initialState,
    reducers: {
        setUserAttempts: (state, action: PayloadAction<{ technologyId: number, userAttempts: UserAttempt[] }>) => {
            state[action.payload.technologyId] = action.payload.userAttempts;
        },
    }
})
export const {
    setUserAttempts
} = userHistorySlice.actions

export const selectUserAttempts = (state: RootState, technologyId: number | null) => technologyId ? state.userHistory[technologyId] : []

export const userHistoryReducer = userHistorySlice.reducer;
