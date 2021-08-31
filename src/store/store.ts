import {configureStore} from "@reduxjs/toolkit";
import questionsReducer from './questions/questions.slice'
import {useDispatch as useOriginalDispatch} from "react-redux";
import technologiesReducer from './technologies/technologies.slice'
import gameReducer from './game/game.slice';

const store = configureStore({
    reducer: {
        questions: questionsReducer,
        technologies: technologiesReducer,
        game: gameReducer
    },
})
export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch
export const useDispatch = () => useOriginalDispatch<Dispatch>()

export default store