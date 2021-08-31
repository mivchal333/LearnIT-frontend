import {Dispatch, RootState} from "../store";
import AttemptRepository from '../../api/repository/attempt.repository'
import {selectUserAttemptId, setQuestion, setUserAttemptId} from "./game.slice";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import QuestionRepository from '../../api/repository/questions.repository'

export const startAttempt = (technologyId: number) => async (dispatch: Dispatch) => {
    const {data} = await AttemptRepository.startAttempt(technologyId)

    dispatch(setUserAttemptId(data.id))
}

export const fetchQuestion = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    let userAttemptId = selectUserAttemptId(getState());

    const {data} = await QuestionRepository.fetchQuestion(userAttemptId)

    dispatch(setQuestion(data))
}