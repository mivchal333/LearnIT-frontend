import axios, {AxiosResponse} from "axios";
import {AnswerResult} from "../model/answerResult.model";
import {GameProgress} from "../model/gameProgress.model";
import {QuestionModel} from "../model/question.model";
import {CreateQuestionModel} from "../model/createQuestionModel.model";
import {QuestionPreview} from "../model/questionPreview.model";
import {QuestionEntity} from "../model/questionEntity";

const fetchQuestion = (attemptId: string): Promise<AxiosResponse<GameProgress<QuestionModel>>> => axios.get("/api/question/attempt", {
    params: {
        attemptId
    }
})

const submitAnswer = (attemptId: string, answerId?: number): Promise<AxiosResponse<AnswerResult>> => axios.post("/api/question/answer", {
    attemptId,
    answerId,
})

const createQuestion = (technologyId: number, data: CreateQuestionModel): Promise<AxiosResponse<QuestionModel>> => axios.post("/api/question", data, {
    params: {
        technologyId
    }
})

const getQuestionsByTechnology = (technologyId: number): Promise<AxiosResponse<QuestionPreview[]>> => axios.get("/api/question", {
    params: {
        id: technologyId
    }
})

const fetchQuestionById = (questionId: number): Promise<AxiosResponse<QuestionEntity>> => axios.get(`/api/question/${questionId}`)

const putQuestion = (questionId: number, data: CreateQuestionModel): Promise<AxiosResponse<QuestionEntity>> => axios.put(`/api/question/${questionId}`, data, {
    params: {
        questionId
    }
})
const deleteQuestion = (questionId: number): Promise<AxiosResponse<QuestionEntity>> => axios.delete(`/question/${questionId}`)

const postPublishedState = (questionId: number, published: boolean): Promise<AxiosResponse<void>> => axios.post(`/api/question/${questionId}/published`, {published})

export const QuestionRepository = {
    fetchQuestion,
    submitAnswer,
    createQuestion,
    getQuestionsByTechnology,
    fetchQuestionById,
    putQuestion,
    deleteQuestion,
    postPublishedState,
};
export default QuestionRepository