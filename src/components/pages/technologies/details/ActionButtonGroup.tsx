import React from 'react'
import {Button, ButtonGroup, makeStyles} from "@material-ui/core";
import {useSelector} from "../../../../store/store";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {GET_ROUTE} from "../../../../route/routes";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTechnology} from "../../../../store/technologies/actions";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles({
    headerAction: {
        display: "flex",
        justifyContent: "end",
    },
    deleteButton: {
        backgroundColor: red["300"],
        '&:hover': {
            backgroundColor: red["400"],
        },
        '&:active': {
            backgroundColor: red["500"],
        }
    }
});

interface PropsType {
    className?: string
}

const ActionButtonGroup = (props: PropsType) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const technologyId = useSelector(selectTechnologyContextId)

    const onDeleteClick = async () => {
        await dispatch(deleteTechnology())
        history.push(GET_ROUTE.TECHNOLOGIES())
    }


    return (
        <ButtonGroup className={classes.headerAction}>
            <Button
                to={GET_ROUTE.TECHNOLOGY_QUESTION_ADD(technologyId)}
                component={Link}
                variant="outlined"
            >
                Add Question
            </Button>
            <Button
                className={classes.deleteButton}
                onClick={onDeleteClick}
            >
                Delete
            </Button>
        </ButtonGroup>
    )
}
export default ActionButtonGroup