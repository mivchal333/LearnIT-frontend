import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import CardsRepository from '../../api/repository/cards.repository'
import {selectCurrentCard, setCurrentCard} from "./cards.slice";
import QuestionRepository from "../../api/repository/questions.repository";
import {errorFlag} from "../../service/flag.service";
import {addFlag} from "../shared/page/page.slice";
import {finishGame, selectProgress, selectUserAttemptId, setIsLoading, setProgress} from "../shared/game/game.slice";


export const loadCard = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    dispatch(setIsLoading(true))
    const progress = selectProgress(getState());
    if (progress.actual === progress.total - 1) {
        dispatch(finishGame())
        return;
    }

    const userAttemptId = selectUserAttemptId(getState());

    try {
        const {data: {actual, total, entry}} = await CardsRepository.loadCard(userAttemptId)
        dispatch(setCurrentCard(entry))
        dispatch(setProgress({actual, total}))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Cannot load card!")))
        dispatch(setIsLoading(false))
    }
}

const markCardKnown = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const userAttemptId = selectUserAttemptId(getState());
    const currentCard = selectCurrentCard(getState());
    if (!currentCard) {
        console.error("Not found current card!")
        throw new Error("Not found current card!")
    }

    const {data} = await QuestionRepository.submitAnswer(userAttemptId, currentCard.answer.id)
}

export const knowItAction = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    await dispatch(markCardKnown())
    dispatch(loadCard())
}

const markCardNotKnown = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const userAttemptId = selectUserAttemptId(getState());
    const {data} = await QuestionRepository.submitAnswer(userAttemptId, undefined)
}

export const notKnowItAction = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    dispatch(markCardNotKnown())
}