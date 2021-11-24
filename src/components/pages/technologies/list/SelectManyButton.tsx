import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {useDispatch, useSelector} from "../../../../store/store";
import {selectIsSelectManyEnabled, setSelectManyEnabled} from "../../../../store/technologies/technologies.slice";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
}));

const SelectManyButton = () => {
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
        startIcon={<CheckBoxIcon/>}
        onClick={onClick}

    >
        Zaznacz kilka
    </Button>
}

export default SelectManyButton