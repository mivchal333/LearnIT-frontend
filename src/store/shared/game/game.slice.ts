import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";

interface ProgressType {
    actual: number,
    total: number,
}

interface GameSlice {
    technologyId: number,
    gameState: {
        userAttemptId: string,
        progress: ProgressType,
        isFinished: boolean,
    }
    isLoading: boolean,
}

const initialState: GameSlice = {
    technologyId: 0,
    gameState: {
        userAttemptId: '',
        progress: {
            actual: 0,
            total: 0,
        },
        isFinished: false,
    },
    isLoading: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setTechnologyId: (state, action: PayloadAction<number>) => {
            state.technologyId = action.payload;
        },
        setUserAttemptId: (state, action: PayloadAction<string>) => {
            state.gameState.userAttemptId = action.payload;
        },
        setProgress: (state, action: PayloadAction<ProgressType>) => {
            state.gameState.progress = action.payload
        },
        finishGame: (state) => {
            state.gameState.isFinished = true
        },
        resetGameState: (state) => {
            state.gameState.userAttemptId = ''
            state.gameState.isFinished = false
            state.gameState.progress.actual = 0
            state.gameState.progress.total = 0
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})
export const {
    setTechnologyId,
    setUserAttemptId,
    setProgress,
    finishGame,
    resetGameState,
    setIsLoading,
} = gameSlice.actions

export const selectUserAttemptId = (state: RootState) => state.game.gameState.userAttemptId
export const selectProgress = (state: RootState) => state.game.gameState.progress
export const selectIsFinished = (state: RootState) => state.game.gameState.isFinished
export const selectTechnologyId = (state: RootState) => state.game.technologyId
export const selectIsLoading = (state: RootState) => state.game.isLoading

export default gameSlice.reducer;