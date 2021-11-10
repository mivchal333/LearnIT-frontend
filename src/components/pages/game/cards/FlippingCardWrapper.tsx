import React, {ReactNode} from 'react'
import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles((theme: any) => ({
    paper: {
        cursor: "pointer",
        width: "404px",
        height: "404px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
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