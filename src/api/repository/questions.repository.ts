import axios, {AxiosResponse} from "axios";
import {AnswerResult} from "../model/answerResult.model";
import {GameProgress} from "../model/gameProgress.model";
import {QuestionModel} from "../model/question.model";
import {CreateQuestionModel} from "../model/createQuestionModel.model";
import {QuestionPreview} from "../model/questionPreview.model";
import {QuestionEntity} from "../model/questionEntity";

const fetchQuestion = (attemptId: string): Promise<AxiosResponse<GameProgress<QuestionModel>>> => axios.get("/question/attempt", {
    params: {
        attemptId
    }
})

const submitAnswer = (attemptId: string, answerId?: number): Promise<AxiosResponse<AnswerResult>> => axios.post("/question/answer", {
    attemptId,
    answerId,
})

const createQuestion = (technologyId: number, data: CreateQuestionModel): Promise<AxiosResponse<QuestionModel>> => axios.post("/question", data, {
    params: {
        technologyId
    }
})

const getQuestionsByTechnology = (technologyId: number): Promise<AxiosResponse<QuestionPreview[]>> => axios.get("/question", {
    params: {
        id: technologyId
    }
})

const fetchQuestionById = (questionId: number): Promise<AxiosResponse<QuestionEntity>> => axios.get(`/question/${questionId}`)

const putQuestion = (questionId: number, data: CreateQuestionModel): Promise<AxiosResponse<QuestionEntity>> => axios.put(`/question/${questionId}`, data, {
    params: {
        questionId
    }
})
const deleteQuestion = (questionId: number): Promise<AxiosResponse<QuestionEntity>> => axios.delete(`/question/${questionId}`)

export const QuestionRepository = {
    fetchQuestion,
    submitAnswer,
    createQuestion,
    getQuestionsByTechnology,
    fetchQuestionById,
    putQuestion,
    deleteQuestion,
};
export default QuestionRepository