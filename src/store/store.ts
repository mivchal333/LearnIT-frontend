import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch as useOriginalDispatch, useSelector as useReduxDispatch} from "react-redux";
import technologiesReducer from './technologies/technologies.slice'
import quizReducer from './quiz/quiz.slice';
import gameReducer from './game/game.slice';
import {cardsReducer} from "./cards/cards.slice";
import {userHistoryReducer} from "./history/history.slice";

const store = configureStore({
    reducer: {
        technologies: technologiesReducer,
        quiz: quizReducer,
        game: gameReducer,
        cards: cardsReducer,
        userHistory: userHistoryReducer
    },
})
export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch
export const useDispatch = () => useOriginalDispatch<Dispatch>()

export const useSelector: TypedUseSelectorHook<RootState> = useReduxDispatch

export default store