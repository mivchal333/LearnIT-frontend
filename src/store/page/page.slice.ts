import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Flag} from "./flag.model";

interface PageSlice {
    flags: Flag[]
}

const initialState: PageSlice = {
    flags: [],
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        addFlag: (state, action: PayloadAction<Flag>) => {
            state.flags = [...state.flags, action.payload]
        },
        dismissFlag: (state) => {
            state.flags.shift()
        },
    }
})
export const {
    addFlag,
    dismissFlag,
} = pageSlice.actions

export const selectFlags = (state: RootState) => state.page.flags

export const pageReducer = pageSlice.reducer;
