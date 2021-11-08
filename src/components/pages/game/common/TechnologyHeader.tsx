import React from 'react'
import {Paper, Typography} from "@material-ui/core";
import {useTechnologyContext} from "../../../../hooks/useTechnologyContext";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3)
    },
}));

const TechnologyHeader = () => {
    const classes = useStyles();

    const technology = useTechnologyContext();

    return (
        <Paper>
            <Typography component="h1" variant="h4" className={classes.title}>
                {technology?.name}
            </Typography>
        </Paper>
    )
}
export default TechnologyHeader
