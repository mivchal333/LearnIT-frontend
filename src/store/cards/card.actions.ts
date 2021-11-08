import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import CardsRepository from '../../api/repository/cards.repository'
import {selectCurrentCard, setCurrentCard} from "./cards.slice";
import QuestionRepository from "../../api/repository/questions.repository";
import {errorFlag} from "../../service/flag.service";
import {addFlag, showModal} from "../shared/page/page.slice";
import {selectHasNext, selectUserAttemptId, setIsLoading, setProgress} from "../shared/game/game.slice";
import {Modal} from "../shared/page/modal.model";


export const loadCard = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    dispatch(setIsLoading(true))

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

    try {
        await QuestionRepository.submitAnswer(userAttemptId, currentCard.answer.id)
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Cannot submit request!")))
        dispatch(setIsLoading(false))
    }
}

export const knowItAction = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    await dispatch(markCardKnown())
    const hasNext = selectHasNext(getState());
    if (hasNext) {
        dispatch(loadCard())
    } else {
        dispatch(showModal(Modal.GAME_FINISHED))
    }
}

const markCardNotKnown = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const userAttemptId = selectUserAttemptId(getState());
    try {
        await QuestionRepository.submitAnswer(userAttemptId)
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Cannot submit request!")))
    }
}

export const notKnowItAction = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    await dispatch(markCardNotKnown())
    const hasNext = selectHasNext(getState());
    if (hasNext) {
        dispatch(loadCard())
    } else {
        dispatch(showModal(Modal.GAME_FINISHED))
    }
}
