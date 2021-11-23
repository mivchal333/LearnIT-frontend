import {RootState} from "../store";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {UserHistoryRepository} from "../../api/repository/userHistory.repository";
import {setUserAttempts} from "./history.slice";
import {selectTechnologyContextId} from "../technologies/technologies.slice";
import {addFlag} from "../shared/page/page.slice";
import {errorFlag} from "../../service/flag.service";
import TechnologyRepository from "../../api/repository/technologies.repository";
import {isNil} from "lodash-es";


export const loadUserCurrentHistory = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState());

    if (!isNil(technologyId)) {
        dispatch(loadUserHistoryByTechnology(technologyId))
    } else {
        console.error("Not found technology context id")
    }
}

export const loadUserHistoryByTechnology = (technologyId: number): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {

    try {
        const {data: userAttempts} = await UserHistoryRepository.fetchUserHistoryByTechnology(technologyId)
        dispatch(setUserAttempts({technologyId, userAttempts}))
    } catch (e) {
        console.error(e);
        dispatch(addFlag(errorFlag("Unable to load user history")))
    }
}

export const loadUserHistory = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    try {
        const {
            data: technologies = []
        } = await TechnologyRepository.fetchTechnologies()

        technologies.forEach(technology => {
            dispatch(loadUserHistoryByTechnology(technology.id))
        })
    } catch (e) {
        console.error(e);
        dispatch(addFlag(errorFlag("Unable to load user history")))
    }
}
