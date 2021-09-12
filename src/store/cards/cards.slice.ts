import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Card} from "../../api/model/card.model";

interface CardsSlice {
    currentCard: Card | null,
}

const initialState: CardsSlice = {
    currentCard: null,
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCurrentCard: (state, action: PayloadAction<Card>) => {
            state.currentCard = action.payload;
        },
    }
})
export const {
    setCurrentCard,
} = cardsSlice.actions

export const selectCurrentCard = (state: RootState) => state.cards.currentCard

export const cardsReducer = cardsSlice.reducer;
