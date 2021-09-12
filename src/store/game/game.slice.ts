import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

interface GameSlice {
    technologyId: number,
    userAttemptId: string,
}

const initialState: GameSlice = {
    technologyId: 0,
    userAttemptId: '',
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
    }
})
export const {
    setTechnologyId,
    setUserAttemptId,
} = gameSlice.actions

export const selectUserAttemptId = (state: RootState) => state.game.userAttemptId

export default gameSlice.reducer;