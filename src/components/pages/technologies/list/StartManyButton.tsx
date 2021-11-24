import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "../../../../store/store";
import {selectIsSelectManyEnabled, setSelectManyEnabled} from "../../../../store/technologies/technologies.slice";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
}));

const StartManyButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const isManyEnabled = useSelector(selectIsSelectManyEnabled)

    const onClick = () => {
        dispatch(setSelectManyEnabled(!isManyEnabled))
    }
    return <Button
        className={classes.root}
        variant="outlined"
        color="primary"
        startIcon={<PlayArrowIcon/>}
        onClick={onClick}
    >
        Start
    </Button>
}

export default StartManyButton