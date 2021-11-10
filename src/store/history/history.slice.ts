import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {UserAttempt} from "../../api/model/userAttempt.model";

export interface UserHistoryEntries {
    [technologyId: number]: UserAttempt[]
}

interface UserHistorySlice {
    entries: UserHistoryEntries,
}

const initialState: UserHistorySlice = {
    entries: {},
}

const userHistorySlice = createSlice({
    name: 'userHistory',
    initialState,
    reducers: {
        setUserAttempts: (state, action: PayloadAction<{ technologyId: number, userAttempts: UserAttempt[] }>) => {
            state.entries[action.payload.technologyId] = action.payload.userAttempts;
        },
    }
})
export const {
    setUserAttempts
} = userHistorySlice.actions

export const selectUserAttemptsByTechnologyId = (state: RootState, technologyId: number | null) => technologyId ? state.userHistory.entries[technologyId] : []
export const selectUserAttempts = (state: RootState) => state.userHistory.entries

export const userHistoryReducer = userHistorySlice.reducer;
