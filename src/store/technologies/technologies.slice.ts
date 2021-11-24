import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Technology} from "../../api/model/technology.model";
import {RootState} from "../store";
import {keyBy} from 'lodash-es'


const emptyTechnology: Technology = {
    description: "", id: 0, image: {fileUrl: "", filename: ""}, name: "", questionCount: 0
}

interface TechnologiesSlice {
    technologies: {
        [key: number]: Technology
    },
    technologyContextId: number | null,
    isSelectManyEnabled: boolean,
    selectedTechnologiesIds: number[],
}

const initialState: TechnologiesSlice = {
    technologies: {},
    technologyContextId: null,
    isSelectManyEnabled: false,
    selectedTechnologiesIds: [],
}

const technologiesSlice = createSlice({
    name: 'technologies',
    initialState,
    reducers: {
        setTechnologies: (state, action: PayloadAction<Technology[]>) => {
            state.technologies = keyBy(action.payload, a => a.id);
        },
        setTechnology: (state, action: PayloadAction<Technology>) => {
            state.technologies = {
                ...state.technologies,
                [action.payload.id]: action.payload,
            };
        },
        setTechnologyContextId: (state, action: PayloadAction<number>) => {
            state.technologyContextId = action.payload
        },
        resetTechnologyContextId: (state) => {
            state.technologyContextId = null
        },
        setSelectManyEnabled: (state, action: PayloadAction<boolean>) => {
            state.isSelectManyEnabled = action.payload;
            state.selectedTechnologiesIds = []
        },
        addSelectedTechnology: (state, action: PayloadAction<number>) => {
            state.selectedTechnologiesIds.push(action.payload)
        },
        removeSelectedTechnology: (state, action: PayloadAction<number>) => {
            state.selectedTechnologiesIds = state.selectedTechnologiesIds.filter(id => id !== action.payload)
        },
    }
})
export const {
    setTechnologies,
    setTechnology,
    setTechnologyContextId,
    addSelectedTechnology,
    removeSelectedTechnology,
    setSelectManyEnabled,
    resetTechnologyContextId
} = technologiesSlice.actions

export const selectTechnologies = (state: RootState) => state.technologies.technologies
export const selectTechnology = (state: RootState, id: number) => state.technologies.technologies[id] || emptyTechnology
export const selectTechnologyContextId = (state: RootState) => state.technologies.technologyContextId
export const selectIsSelectManyEnabled = (state: RootState) => state.technologies.isSelectManyEnabled
export const selectSelectedTechnologiesIds = (state: RootState) => state.technologies.selectedTechnologiesIds
export default technologiesSlice.reducer;