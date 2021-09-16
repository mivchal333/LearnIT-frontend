import {Dispatch, RootState} from "../store";
import {setTechnologies, setTechnology} from "./technologies.slice";
import TechnologiesRepository from '../../api/repository/technologies.repository'
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {CreateTechnologyPayload} from "../../components/technologies/add/AddTechnologyForm";

export const fetchTechnologies = () => async (dispatch: Dispatch) => {
    const {data} = await TechnologiesRepository.fetchTechnologies();
    dispatch(setTechnologies(data))
}

export const fetchTechnology = (id: number) => async (dispatch: Dispatch) => {
    const {data} = await TechnologiesRepository.fetchTechnology(id);
    dispatch(setTechnology(data))
}


export const addTechnology = (values: CreateTechnologyPayload): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {data} = await TechnologiesRepository.createTechnology(values)

    dispatch(setTechnology(data))
}


