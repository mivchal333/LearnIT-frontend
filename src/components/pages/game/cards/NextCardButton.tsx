import React from "react";
import {Button} from "@material-ui/core";
import {useDispatch} from "../../../../store/store";
import {loadCard} from "../../../../store/cards/card.actions";
import {setIsFlipped} from "../../../../store/cards/cards.slice";

const NextCardButton = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(loadCard())
        dispatch(setIsFlipped(false))
    }

    return <Button
        onClick={onClick}
    >
        Next
    </Button>
}
export default NextCardButton