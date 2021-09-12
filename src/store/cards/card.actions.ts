import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import CardsRepository from '../../api/repository/cards.repository'
import {selectUserAttemptId} from "../game/game.slice";
import {setCurrentCard} from "./cards.slice";


export const loadCard = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const userAttemptId = selectUserAttemptId(getState());
    if (userAttemptId) {
        const {data} = await CardsRepository.loadCard(userAttemptId)

        dispatch(setCurrentCard(data))
    } else {
        console.error("Not found user attempt ID!")
    }
}