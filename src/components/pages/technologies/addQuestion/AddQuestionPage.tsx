import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import AddQuestionForm from "./AddQuestionForm";


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
    title: {
        marginBottom: theme.spacing(3)
    }
}));

const AddQuestionPage = () => {
    const classes = useStyles();
    return <>
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" className={classes.title}>
                Dodaj pytanie
            </Typography>
            <div>
                <AddQuestionForm/>
            </div>
        </Paper>
    </>
}
export default AddQuestionPage