import axios, {AxiosResponse} from "axios";
import {AnswerResult} from "../model/answerResult.model";
import {GameProgress} from "../model/gameProgress.model";
import {QuestionModel} from "../model/question.model";
import {CreateQuestionModel} from "../model/createQuestionModel.model";

const fetchQuestion = (attemptId: string): Promise<AxiosResponse<GameProgress<QuestionModel>>> => axios.get("/question", {
    params: {
        attemptId
    }
})

const submitAnswer = (attemptId: string, answerId?: number): Promise<AxiosResponse<AnswerResult>> => axios.post("/question/answer", {
    attemptId,
    answerId,
})

const createQuestion = (data: CreateQuestionModel): Promise<AxiosResponse<QuestionModel>> => axios.post("/question", data)

export const QuestionRepository = {
    fetchQuestion,
    submitAnswer,
    createQuestion,
};
export default QuestionRepository