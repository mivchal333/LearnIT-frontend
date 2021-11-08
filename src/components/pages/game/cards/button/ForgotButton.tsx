import React from 'react'
import {Button, makeStyles} from "@material-ui/core";
import {notKnowItAction} from "../../../../../store/cards/card.actions";
import {useDispatch} from "../../../../../store/store";


const useStyles = makeStyles((theme: any) => ({
    button: {
        backgroundColor: theme.palette.error.light,
        '&:hover': {
            backgroundColor: theme.palette.error.main,
        }
    },
}));


const ForgotButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Button
            variant="outlined"
            className={classes.button}
            onClick={() => dispatch(notKnowItAction())}

        >
            I forgot it
        </Button>
    )
}
export default ForgotButton