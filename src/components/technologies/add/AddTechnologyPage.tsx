import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import AddTechnologyForm from "./AddTechnologyForm";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const AddTechnologyPage = () => {
    const classes = useStyles();
    return <>
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                Add Technology
            </Typography>
            <div>
                <AddTechnologyForm/>
            </div>
        </Paper>
    </>
}
export default AddTechnologyPage