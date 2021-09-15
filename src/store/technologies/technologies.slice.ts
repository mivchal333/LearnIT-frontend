import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Technology} from "../../api/model/Technology.model";
import {RootState} from "../store";
import {keyBy} from 'lodash-es'

interface TechnologiesSlice {
    technologies: {
        [key: number]: Technology
    },
    technologyContextId: number,
}

const initialState: TechnologiesSlice = {
    technologies: {},
    technologyContextId: 0
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
export const selectTechnology = (state: RootState, id: number) => state.technologies.technologies[id]
export const selectTechnologyContextId = (state: RootState) => state.technologies.technologyContextId
export default technologiesSlice.reducer;