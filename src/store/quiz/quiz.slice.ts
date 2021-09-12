import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {AnswerResult} from "../../api/model/answerResult.model";
import {Question} from "../../api/model/Question.model";

interface QuizSlice {
    answerResult: AnswerResult | null,
    question: Question,

}

const initialState: QuizSlice = {
    answerResult: null,
    question: {
        id: 0,
        body: "",
        difficultyId: 0,
        technologyId: 0,
        answers: []
    }
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswerResult: (state, action: PayloadAction<AnswerResult>) => {
            state.answerResult = action.payload
        },
        resetAnswerResult: (state) => {
            state.answerResult = null
        },
        setQuestion: (state, action: PayloadAction<Question>) => {
            state.question = action.payload;
        },
    }
})
export const {
    setAnswerResult,
    resetAnswerResult,
    setQuestion
} = quizSlice.actions

export const selectAnswerResult = (state: RootState) => state.quiz.answerResult
export const selectQuestion = (state: RootState) => state.quiz.question

export default quizSlice.reducer;