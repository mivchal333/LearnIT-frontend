import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../store/store";
import {CircularProgress, Paper} from "@material-ui/core";
import {loadCard} from "../../../store/cards/card.actions";
import {selectCurrentCard} from "../../../store/cards/cards.slice";

const CardsGame = () => {
    const card = useSelector(selectCurrentCard);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCard())
    }, [])


    if (!card) {
        return <CircularProgress/>
    }

    return (
        <Paper elevation={3}>

            <h3>{card.body}</h3>

        </Paper>

    )

}
export default CardsGame