import React from 'react'
import {CircularProgress, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTechnologyContext} from "../../../../hooks/useTechnologyContext";
import {isNil} from "lodash-es";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3)
    },
    paper: {
        margin: theme.spacing(3)
    }
}));

const QuestionListHeader = () => {
    const classes = useStyles();
    const technology = useTechnologyContext();

    if (isNil(technology)) {
        return <CircularProgress/>
    }

    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" className={classes.title}>
                Technologia: {technology.name}
            </Typography>
        </Paper>
    )
}
export default QuestionListHeader
