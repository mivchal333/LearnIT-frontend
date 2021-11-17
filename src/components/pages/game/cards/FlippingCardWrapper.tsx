import React, {ReactNode} from 'react'
import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles((theme: any) => ({
    paper: {
        cursor: "pointer",
        width: "40rem",
        height: "30rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
        wordBreak: "break-word"
    },
}));

interface PropsType {
    children: ReactNode,
    onFlip: () => void,
}

const FlippingCardWrapper = (props: PropsType) => {
    const classes = useStyles();

    return (
        <Paper onClick={props.onFlip} className={classes.paper} elevation={3} square>
            {props.children}
        </Paper>
    )
}
export default FlippingCardWrapper