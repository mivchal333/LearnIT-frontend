import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";
import {isNil} from "lodash-es";

interface ProgressType {
    actual: number,
    total: number,
}

interface GameSlice {
    gameState: {
        userAttemptId: string,
        technologiesIds: number[],
        progress: {
            actual: number | null,
            total: number | null,
        },
    }
    isLoading: boolean,
}

const initialState: GameSlice = {
    gameState: {
        userAttemptId: '',
        technologiesIds: [],
        progress: {
            actual: null,
            total: null,
        },
    },
    isLoading: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setUserAttemptId: (state, action: PayloadAction<string>) => {
            state.gameState.userAttemptId = action.payload;
        },
        setProgress: (state, action: PayloadAction<ProgressType>) => {
            state.gameState.progress = action.payload
        },
        resetGameState: (state) => {
            state.gameState.userAttemptId = ''
            state.gameState.progress.actual = null
            state.gameState.progress.total = null
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setGameTechnologiesIds: (state, action: PayloadAction<number[]>) => {
            state.gameState.technologiesIds = action.payload
        }
    }
})
export const {
    setUserAttemptId,
    setProgress,
    resetGameState,
    setIsLoading,
    setGameTechnologiesIds,
} = gameSlice.actions

export const selectUserAttemptId = (state: RootState) => state.game.gameState.userAttemptId
export const selectProgress = (state: RootState) => state.game.gameState.progress
export const selectIsLoading = (state: RootState) => state.game.isLoading
export const selectHasNext = (state: RootState): boolean => {
    const {actual, total} = state.game.gameState.progress
    if (isNil(actual) || isNil(total)) {
        return true;
    }
    return actual < total - 1;
}

export default gameSlice.reducer;