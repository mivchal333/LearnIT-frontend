import {Dispatch, RootState} from "../store";
import {selectTechnology, selectTechnologyContextId, setTechnologies, setTechnology} from "./technologies.slice";
import TechnologiesRepository from '../../api/repository/technologies.repository'
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {TechnologyDataPayload} from "../../api/model/technologyDataPayload";
import {addFlag} from "../shared/page/page.slice";
import {errorFlag, successFlag} from "../../service/flag.service";
import {QuestionService} from "../../service/question.service";
import {Technology} from "../../api/model/technology.model";
import {isNil} from "lodash-es";
import {QuestionFormModel} from "../../components/pages/technologies/questionForm/QuestionFormModel";
import QuestionRepository from "../../api/repository/questions.repository";

export const fetchTechnologies = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await TechnologiesRepository.fetchTechnologies();
        dispatch(setTechnologies(data))
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Failed to load technologies.")))
    }
}

export const fetchTechnology = (id: number) => async (dispatch: Dispatch) => {
    try {
        const {data} = await TechnologiesRepository.fetchTechnology(id);
        dispatch(setTechnology(data))
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Failed to load technology.")))
    }
}


export const addTechnology = (values: TechnologyDataPayload): ThunkAction<Promise<Technology | false>, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        const {data} = await TechnologiesRepository.createTechnology(values)

        dispatch(setTechnology(data))
        dispatch(addFlag(successFlag("Technology saved successfully.")))
        return data;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Cannot add technology")))
        return false;
    }
}

export const editTechnology = (values: TechnologyDataPayload): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    try {
        const technologyId = selectTechnologyContextId(getState()) || 0;

        const {data} = await TechnologiesRepository.editTechnology(technologyId, values)

        dispatch(setTechnology(data))
        dispatch(addFlag(successFlag("Technologia edytowana poprawnie")))
        return true;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Cannot edit technology")))
        return false;
    }
}

export const addQuestion = (values: QuestionFormModel): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState()) || 0;

    try {
        await QuestionService.createQuestion(values, technologyId)
        dispatch(addFlag(successFlag("Pytanie dodane poprawnie")))
        dispatch(fetchTechnology(technologyId))
        return true;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Nie dodano pytania")))
        return false;
    }
}

export const editQuestion = (questionId: number, values: QuestionFormModel): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState()) || 0;

    try {
        await QuestionService.editQuestion(questionId, values)
        dispatch(addFlag(successFlag("Pytanie zapisane poprawnie")))
        dispatch(fetchTechnology(technologyId))
        return true;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Nie edytowano pytania")))
        return false;
    }
}

export const deleteQuestion = (questionId: number): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState()) || 0;

    try {
        await QuestionRepository.deleteQuestion(questionId)
        dispatch(addFlag(successFlag("Pytanie usunięte poprawnie")))
        dispatch(fetchTechnology(technologyId))
        return true;
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Nie usunięto pytania")))
        return false;
    }
}


export const deleteTechnology = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technologyId = selectTechnologyContextId(getState())

    if (isNil(technologyId)) {
        console.error("Not found technology context id")
        return;
    }
    try {
        await TechnologiesRepository.remove(technologyId)
    } catch (e) {
        console.log(e)
        dispatch(addFlag(errorFlag("Cannot delete technology")))
        throw e;
    }
}
export const getTechnology = (technologyId: number): ThunkAction<Promise<Technology>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const technology = selectTechnology(getState(), technologyId);
    if (isNil(technology)) {
        await dispatch(fetchTechnology(technologyId))
    }
    return selectTechnology(getState(), technologyId);
}