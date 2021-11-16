import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Card} from "../../api/model/card.model";

interface CardsSlice {
    currentCard: Card,
    isFlipped: boolean,
}

const emptyCard: Card = {
    answer: {
        id: 0,
        body: "",
        code: ""
    },
    body: " a "
};
const initialState: CardsSlice = {
    currentCard: emptyCard,
    isFlipped: false,
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCurrentCard: (state, action: PayloadAction<Card>) => {
            state.currentCard = action.payload;
        },
        resetCurrentCard: (state) => {
            state.currentCard = emptyCard
        },
        setIsFlipped: (state, action: PayloadAction<boolean>) => {
            state.isFlipped = action.payload;
        },
    }
})
export const {
    setCurrentCard,
    resetCurrentCard,
    setIsFlipped,
} = cardsSlice.actions

export const selectCurrentCard = (state: RootState) => state.cards.currentCard
export const selectIsFlipped = (state: RootState) => state.cards.isFlipped

export const cardsReducer = cardsSlice.reducer;
