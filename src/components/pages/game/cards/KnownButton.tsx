import React from "react";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {knowItAction} from "../../../../store/cards/card.actions";

const KnownButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(knowItAction())
    }

    return <Button
        onClick={onClick}
        color="primary"
    >
        I know IT!
    </Button>
}
export default KnownButton