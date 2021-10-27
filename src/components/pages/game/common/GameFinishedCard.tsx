import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {GET_ROUTE} from "../../../../route/routes";
import {selectTechnologyId} from "../../../../store/shared/game/game.slice";

const GameFinishedCard = () => {
    const technologyId = useSelector(selectTechnologyId);

    const action = <Button component={Link} to={GET_ROUTE.TECHNOLOGY(technologyId)}>Back to technology</Button>


    return (
        <MuiAlert
            elevation={6}
            variant="filled"
            severity="success"
            action={action}
        >
            Success! Game finished. Look at other technologies.
        </MuiAlert>
    )
}
export default GameFinishedCard