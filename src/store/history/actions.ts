import {RootState} from "../store";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {UserHistoryRepository} from "../../api/repository/userHistory.repository";
import {setUserAttempts} from "./history.slice";
import {selectTechnologyContextId} from "../technologies/technologies.slice";
import {isNil} from "lodash-es";


export const loadUserHistory = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState());

    if (isNil(technologyId)) {
        console.error("Nullable technologyId")
        return;
    }
    const {data: userAttempts} = await UserHistoryRepository.fetchUserHistory(technologyId)

    dispatch(setUserAttempts({technologyId, userAttempts}))
}
