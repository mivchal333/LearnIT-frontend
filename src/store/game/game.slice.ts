import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Question} from "../../api/model/Question.model";
import {AnswerResult} from "../../api/model/answerResult.model";

interface GameSlice {
    technologyId: number,
    userAttemptId: string,
    question: Question,
    answerResult?: AnswerResult,
}

const initialState: GameSlice = {
    technologyId: 0,
    userAttemptId: '',
    question: {
        id: 0,
        body: "",
        difficultyId: 0,
        technologyId: 0,
        answers: []
    },
    answerResult: undefined,
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
        setAnswerResult: (state, action: PayloadAction<AnswerResult>) => {
            state.answerResult = action.payload
        }
    }
})
export const {
    setTechnologyId, setUserAttemptId, setQuestion, setAnswerResult
} = gameSlice.actions

export const selectUserAttemptId = (state: RootState) => state.game.userAttemptId
export const selectQuestion = (state: RootState) => state.game.question
export const selectAnswerResult = (state: RootState) => state.game.answerResult

export default gameSlice.reducer;