import {RootState} from "../store";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {UserHistoryRepository} from "../../api/repository/userHistory.repository";
import {setUserAttempts} from "./history.slice";
import {selectTechnologyContextId} from "../technologies/technologies.slice";


export const loadUserHistory = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState());

    const {data: userAttempts} = await UserHistoryRepository.fetchUserHistory(technologyId)

    dispatch(setUserAttempts({technologyId, userAttempts}))
}
