import axios, {AxiosResponse} from "axios";
import {AnswerResult} from "../model/answerResult.model";

const fetchQuestion = (attemptId: string) => axios.get("/question", {
    params: {
        attemptId
    }
})

const submitAnswer = (attemptId: string, answerId: number): Promise<AxiosResponse<AnswerResult>> => axios.post("/question/answer", {
    attemptId,
    answerId,
})

export default {fetchQuestion, submitAnswer};