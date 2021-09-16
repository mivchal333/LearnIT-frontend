import React from 'react'
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {red} from '@material-ui/core/colors';
import {useDispatch} from "react-redux";
import {deleteTechnology} from "../../../store/technologies/actions";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../route/routes";


const useStyles = makeStyles({
    root: {
        backgroundColor: red["400"],
        '&:hover': {
            backgroundColor: red["500"],
        },
        '&:active': {
            backgroundColor: red["600"],
        }

    }
})
const DeleteTechnologyButton = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = async () => {
        await dispatch(deleteTechnology())
        history.push(GET_ROUTE.TECHNOLOGIES())
    }

    return (
        <Button
            className={classes.root}
            onClick={onClick}
        >
            Delete
        </Button>
    )
}
export default DeleteTechnologyButton;