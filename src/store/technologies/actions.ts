import {Dispatch, RootState} from "../store";
import {selectTechnologyContextId, setTechnologies, setTechnology} from "./technologies.slice";
import TechnologiesRepository from '../../api/repository/technologies.repository'
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {CreateTechnologyPayload} from "./createTechnologyPayload";
import {addFlag} from "../shared/page/page.slice";
import {errorFlag, successFlag} from "../../service/flag.service";
import {CreateQuestionForm} from "../../components/pages/technologies/addQuestion/AddQuestionForm";
import {QuestionService} from "../../service/question.service";

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
        dispatch(addFlag(errorFlag("Cannot add technology")))
        return false;
    }
}

export const addQuestion = (values: CreateQuestionForm): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState());

    try {
        await QuestionService.createQuestion(values, technologyId)
        dispatch(addFlag(successFlag("Question saved successfully.")))
        return true;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Cannot add question")))
        return false;
    }
}


export const deleteTechnology = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState())
    await TechnologiesRepository.remove(technologyId)
}
