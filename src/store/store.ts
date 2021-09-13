import {configureStore} from "@reduxjs/toolkit";
import {useDispatch as useOriginalDispatch} from "react-redux";
import technologiesReducer from './technologies/technologies.slice'
import quizReducer from './quiz/quiz.slice';
import gameReducer from './game/game.slice';
import {cardsReducer} from "./cards/cards.slice";

const store = configureStore({
    reducer: {
        technologies: technologiesReducer,
        quiz: quizReducer,
        game: gameReducer,
        cards: cardsReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch
export const useDispatch = () => useOriginalDispatch<Dispatch>()

export default store