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
}

const initialState: TechnologiesSlice = {
    technologies: {},
    technologyContextId: null
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
    }
})
export const {
    setTechnologies,
    setTechnology,
    setTechnologyContextId,
} = technologiesSlice.actions

export const selectTechnologies = (state: RootState) => state.technologies.technologies
export const selectTechnology = (state: RootState, id: number) => state.technologies.technologies[id] || emptyTechnology
export const selectTechnologyContextId = (state: RootState) => state.technologies.technologyContextId
export default technologiesSlice.reducer;