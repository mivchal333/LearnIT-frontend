import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

interface ProgressType {
    actual: number,
    total: number,
}

interface GameSlice {
    technologyId: number,
    userAttemptId: string,
    progress: ProgressType,
    isFinished: boolean,
}

const initialState: GameSlice = {
    technologyId: 0,
    userAttemptId: '',
    progress: {
        actual: 0,
        total: 0,
    },
    isFinished: false,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setTechnologyId: (state, action: PayloadAction<number>) => {
            state.technologyId = action.payload;
        },
        setUserAttemptId: (state, action: PayloadAction<string>) => {
            state.userAttemptId = action.payload;
        },
        setProgress: (state, action: PayloadAction<ProgressType>) => {
            state.progress = action.payload
        },
        finishGame: (state) => {
            state.isFinished = true
        }
    }
})
export const {
    setTechnologyId,
    setUserAttemptId,
    setProgress,
    finishGame,
} = gameSlice.actions

export const selectUserAttemptId = (state: RootState) => state.game.userAttemptId
export const selectProgress = (state: RootState) => state.game.progress
export const selectIsFinished = (state: RootState) => state.game.isFinished
export const selectTechnologyId = (state: RootState) => state.game.technologyId

export default gameSlice.reducer;