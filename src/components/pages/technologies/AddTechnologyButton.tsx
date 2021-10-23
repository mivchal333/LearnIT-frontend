import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {GET_ROUTE} from "../../../route/routes";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}));

const AddTechnologyButton = () => {
    const classes = useStyles();

    return <Button
        className={classes.root}
        to={GET_ROUTE.TECHNOLOGY_ADD()}
        component={Link}
    >
        ADD
    </Button>
}

export default AddTechnologyButton