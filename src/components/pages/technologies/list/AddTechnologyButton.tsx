import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {GET_ROUTE} from "../../../../route/routes";
import {Link} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignSelf: "flex-end",
        width: "13em",
        marginLeft: "auto"
    },
}));

const AddTechnologyButton = () => {
    const classes = useStyles();

    return <Button
        className={classes.root}
        variant="outlined"
        color="primary"
        to={GET_ROUTE.TECHNOLOGY_ADD()}
        component={Link}
        startIcon={<AddIcon/>}

    >
        Dodaj Nową
    </Button>
}

export default AddTechnologyButton