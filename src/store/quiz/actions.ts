import {Dispatch, RootState} from "../store";
import AttemptRepository from '../../api/repository/attempt.repository'
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import QuestionRepository from '../../api/repository/questions.repository'
import {
    finishGame,
    resetGameState,
    selectProgress,
    selectUserAttemptId,
    setProgress,
    setUserAttemptId
} from "../game/game.slice";
import {resetAnswerResult, setAnswerResult, setQuestion} from "./quiz.slice";

export const startAttempt = (technologyId: number) => async (dispatch: Dispatch) => {
    dispatch(resetGameState())
    const {data} = await AttemptRepository.startAttempt(technologyId)

    dispatch(setUserAttemptId(data.id))
}

export const loadQuestion = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const progress = selectProgress(getState());
    if (progress.actual === progress.total - 1) {
        dispatch(finishGame())
        return;
    }

    let userAttemptId = selectUserAttemptId(getState());

    const {data: {entry, actual, total}} = await QuestionRepository.fetchQuestion(userAttemptId)
    console.log(entry)
    dispatch(setQuestion(entry))
    dispatch(setProgress({actual, total}))
}

export const submitAnswer = (answerId: number): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    let userAttemptId = selectUserAttemptId(getState());

    const {data} = await QuestionRepository.submitAnswer(userAttemptId, answerId)

    dispatch(setAnswerResult(data))
}

export const loadNextQuestion = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    dispatch(resetAnswerResult())

    dispatch(loadQuestion())
}