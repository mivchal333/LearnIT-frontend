import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        height: '5vh',
        padding: theme.spacing(1, 2),
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography variant="body1">Politechnika Białostocka</Typography>
                    <Copyright/>
                </Grid>
            </Grid>

        </footer>
    );
}