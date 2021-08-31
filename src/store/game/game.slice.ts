import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Question} from "../../api/model/Question.model";


interface GameSlice {
    technologyId: number,
    userAttemptId: string,
    question?: Question,
}

const initialState: GameSlice = {
    technologyId: 0,
    userAttemptId: '',
    question: undefined,
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
        setQuestion: (state, action: PayloadAction<Question>) => {
            state.question = action.payload;
        },

    }
})
export const {setTechnologyId, setUserAttemptId, setQuestion} = gameSlice.actions

export const selectUserAttemptId = (state: RootState) => state.game.userAttemptId
export const selectQuestion = (state: RootState) => state.game.question

export default gameSlice.reducer;