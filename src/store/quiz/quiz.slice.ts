import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {AnswerResult} from "../../api/model/answerResult.model";
import {Question} from "../../api/model/Question.model";

interface QuizSlice {
    answerResult: AnswerResult | null,
    question: Question | null,

}

const initialState: QuizSlice = {
    answerResult: null,
    question: null,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswerResult: (state, action: PayloadAction<AnswerResult>) => {
            state.answerResult = action.payload
        },
        resetActualQuestion: (state) => {
            state.answerResult = null;
            state.question = null;
        },
        setQuestion: (state, action: PayloadAction<Question>) => {
            state.question = action.payload;
        },
    }
})
export const {
    setAnswerResult,
    resetActualQuestion,
    setQuestion
} = quizSlice.actions

export const selectAnswerResult = (state: RootState) => state.quiz.answerResult
export const selectQuestion = (state: RootState) => state.quiz.question

export default quizSlice.reducer;