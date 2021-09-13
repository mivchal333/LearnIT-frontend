import axios, {AxiosResponse} from "axios";
import {AnswerResult} from "../model/answerResult.model";
import {GameProgress} from "../model/gameProgress.model";
import {Question} from "../model/Question.model";

const fetchQuestion = (attemptId: string): Promise<AxiosResponse<GameProgress<Question>>> => axios.get("/question", {
    params: {
        attemptId
    }
})

const submitAnswer = (attemptId: string, answerId?: number): Promise<AxiosResponse<AnswerResult>> => axios.post("/question/answer", {
    attemptId,
    answerId,
})

export default {fetchQuestion, submitAnswer};