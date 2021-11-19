import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    value: {
        marginLeft: theme.spacing(3)
    },
}));

interface PropsType {
    title: React.ReactNode,
    value: React.ReactNode,
}

const Field = (props: PropsType) => {
    const classes = useStyles();

    const {title, value} = props;
    return (
        <Grid item xs={6}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" className={classes.value}>{value}</Typography>
        </Grid>
    )
}
export default Field