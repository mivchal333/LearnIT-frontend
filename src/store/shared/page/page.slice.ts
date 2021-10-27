import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Flag} from "./flag.model";
import {Modal} from "./modal.model";
import {RootState} from "../../store";

interface PageSlice {
    flags: Flag[],
    modal?: Modal,
}

const initialState: PageSlice = {
    flags: [],
    modal: undefined,
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
        showModal: (state, action: PayloadAction<Modal>) => {
            state.modal = action.payload
        },
        closeModal: (state) => {
            state.modal = undefined
        },
    }
})
export const {
    addFlag,
    dismissFlag,
    showModal,
    closeModal,
} = pageSlice.actions

export const selectFlags = (state: RootState) => state.page.flags
export const selectModal = (state: RootState) => state.page.modal

export const pageReducer = pageSlice.reducer;
