import {Dispatch, RootState} from "../store";
import AttemptRepository from '../../api/repository/attempt.repository'
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import QuestionRepository from '../../api/repository/questions.repository'
import {resetGameState, selectUserAttemptId, setProgress, setUserAttemptId} from "../shared/game/game.slice";
import {resetActualQuestion, setAnswerResult, setQuestion} from "./quiz.slice";

export const startAttempt = (technologiesIds: number[]) => async (dispatch: Dispatch) => {
    dispatch(resetGameState())
    const {data} = await AttemptRepository.startAttempt(technologiesIds)

    await dispatch(setUserAttemptId(data.id))
}

export const loadQuestion = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(resetActualQuestion())

    let userAttemptId = selectUserAttemptId(getState());

    const {data: {entry, actual, total}} = await QuestionRepository.fetchQuestion(userAttemptId)
    dispatch(setQuestion(entry))
    dispatch(setProgress({actual, total}))
}

export const submitAnswer = (answerId: number): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    let userAttemptId = selectUserAttemptId(getState());

    const {data} = await QuestionRepository.submitAnswer(userAttemptId, answerId)

    dispatch(setAnswerResult(data))
}

export const loadNextQuestionAction = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    dispatch(resetActualQuestion())

    dispatch(loadQuestion())
}