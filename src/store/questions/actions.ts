import QuestionRepository from "../../api/repository/questions.repository";
import {Dispatch} from "../store";
import {setQuestions} from "./questions.slice";


export const fetchQuestions = (attemptId: string) => async (dispatch: Dispatch) => {
    const {data} = await QuestionRepository.fetchQuestions(attemptId)
    dispatch(setQuestions(data))
}