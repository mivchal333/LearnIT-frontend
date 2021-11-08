import {RootState} from "../store";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {UserHistoryRepository} from "../../api/repository/userHistory.repository";
import {setUserAttempts} from "./history.slice";
import {selectTechnologyContextId} from "../technologies/technologies.slice";
import {addFlag} from "../shared/page/page.slice";
import {errorFlag} from "../../service/flag.service";


export const loadUserHistory = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState());

    try {
        const {data: userAttempts} = await UserHistoryRepository.fetchUserHistory(technologyId)
        dispatch(setUserAttempts({technologyId, userAttempts}))
    } catch (e) {
        console.error(e);
        dispatch(addFlag(errorFlag("Unable to load user hustory")))
    }
}
