import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Technology} from "../../api/model/Technology.model";
import {RootState} from "../store";
import {keyBy} from 'lodash-es'

interface TechnologiesSlice {
    technologies: {
        [key: number]: Technology
    }
}

const initialState: TechnologiesSlice = {
    technologies: {},
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
    }
})
export const {setTechnologies, setTechnology} = technologiesSlice.actions

export const selectTechnologies = (state: RootState) => state.technologies.technologies
export const selectTechnology = (state: RootState, id: number) => state.technologies.technologies[id]
export default technologiesSlice.reducer;