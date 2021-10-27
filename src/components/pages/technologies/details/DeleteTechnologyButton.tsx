import React from 'react'
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {red} from '@material-ui/core/colors';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {deleteTechnology} from "../../../../store/technologies/actions";
import {GET_ROUTE} from "../../../../route/routes";


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

interface PropsType {
    className?: string,
}

const DeleteTechnologyButton = (props: PropsType) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = async () => {
        await dispatch(deleteTechnology())
        history.push(GET_ROUTE.TECHNOLOGIES())
    }

    return (
        <div className={props.className}>
            <Button
                className={classes.root}
                onClick={onClick}
            >
                Delete
            </Button>
        </div>
    )
}
export default DeleteTechnologyButton;