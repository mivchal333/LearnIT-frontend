import {Dispatch, RootState} from "../store";
import {selectTechnologyContextId, setTechnologies, setTechnology} from "./technologies.slice";
import TechnologiesRepository from '../../api/repository/technologies.repository'
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {CreateTechnologyPayload} from "./createTechnologyPayload";
import {addFlag} from "../page/page.slice";
import {failFlag, successFlag} from "../../service/flag.service";

export const fetchTechnologies = () => async (dispatch: Dispatch) => {
    const {data} = await TechnologiesRepository.fetchTechnologies();
    dispatch(setTechnologies(data))
}

export const fetchTechnology = (id: number) => async (dispatch: Dispatch) => {
    const {data} = await TechnologiesRepository.fetchTechnology(id);
    dispatch(setTechnology(data))
}


export const addTechnology = (values: CreateTechnologyPayload): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    try {
        const {data} = await TechnologiesRepository.createTechnology(values)

        dispatch(setTechnology(data))
        dispatch(addFlag(successFlag("Technology saved successfully.")))
        return true;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(failFlag("Cannot add technology")))
        return false;
    }
}

export const deleteTechnology = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState())
    await TechnologiesRepository.remove(technologyId)
}
