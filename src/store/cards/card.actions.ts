import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import CardsRepository from '../../api/repository/cards.repository'
import {selectUserAttemptId} from "../game/game.slice";
import {selectCurrentCard, setCurrentCard} from "./cards.slice";
import QuestionRepository from "../../api/repository/questions.repository";


export const loadCard = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const userAttemptId = selectUserAttemptId(getState());
    if (userAttemptId) {
        const {data} = await CardsRepository.loadCard(userAttemptId)

        dispatch(setCurrentCard(data))
    } else {
        console.error("Not found user attempt ID!")
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
    dispatch(markCardKnown())
    dispatch(loadCard())
}

const markCardNotKnown = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const userAttemptId = selectUserAttemptId(getState());
    const {data} = await QuestionRepository.submitAnswer(userAttemptId, undefined)
}

export const notKnowItAction = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    dispatch(markCardNotKnown())
}