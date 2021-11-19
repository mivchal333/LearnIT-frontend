import React from 'react'
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3)
    },
}));

const MyAccountHeader = () => {
    const classes = useStyles();

    return (
        <Paper>
            <Typography component="h1" variant="h4" className={classes.title}>
                Moje konto
            </Typography>
        </Paper>
    )
}
export default MyAccountHeader
