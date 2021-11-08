import React from 'react'
import {Button, makeStyles} from "@material-ui/core";
import {useDispatch} from "../../../../../store/store";
import {knowItAction} from "../../../../../store/cards/card.actions";


const useStyles = makeStyles((theme: any) => ({
    button: {
        backgroundColor: theme.palette.success.light,
        '&:hover': {
            backgroundColor: theme.palette.success.main,
        },
    },
}));


const KnowButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Button
            variant="outlined"
            className={classes.button}
            onClick={() => dispatch(knowItAction())}
        >
            I know it
        </Button>
    )
}
export default KnowButton