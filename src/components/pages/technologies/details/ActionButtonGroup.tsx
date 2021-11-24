import React from 'react'
import {Button, ButtonGroup, CircularProgress, makeStyles} from "@material-ui/core";
import {useSelector} from "../../../../store/store";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {GET_ROUTE} from "../../../../route/routes";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTechnology} from "../../../../store/technologies/actions";
import {red} from "@material-ui/core/colors";
import AddIcon from '@material-ui/icons/Add';
import ListIcon from "@material-ui/icons/List";
import {useTechnologyContext} from "../../../../hooks/useTechnologyContext";
import {isNil} from "lodash-es";
import {selectIsModerator, selectUserLoggedIn} from "../../../../store/user/user.slice";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";


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
    const isUserLogged = useSelector(selectUserLoggedIn);
    const isModerator = useSelector(selectIsModerator)

    const technologyId = useSelector(selectTechnologyContextId) || 0
    const technology = useTechnologyContext();

    const onDeleteClick = async () => {
        await dispatch(deleteTechnology())
        history.push(GET_ROUTE.TECHNOLOGIES())
    }

    if (isNil(technology)) {
        return <CircularProgress/>
    }

    return (
        <ButtonGroup className={classes.headerAction}>
            {isUserLogged && (
                <Button
                    to={GET_ROUTE.TECHNOLOGY_QUESTION_ADD(technologyId)}
                    component={Link}
                    variant="outlined"
                    startIcon={<AddIcon/>}
                >
                    Dodaj pytanie
                </Button>
            )}
            {isUserLogged && isModerator && (
                <>
                    <Button
                        to={GET_ROUTE.TECHNOLOGY_QUESTION_LIST(technologyId)}
                        component={Link}
                        variant="outlined"
                        startIcon={<ListIcon/>}
                    >
                        Edytuj pytania
                    </Button>
                    <Button
                        to={GET_ROUTE.TECHNOLOGY_EDIT(technologyId)}
                        component={Link}
                        variant="outlined"
                        startIcon={<EditIcon/>}
                    >
                        Edytuj
                    </Button>
                    <Button
                        className={classes.deleteButton}
                        onClick={onDeleteClick}
                        startIcon={<DeleteIcon/>}
                    >
                        Usuń
                    </Button>
                </>
            )}
        </ButtonGroup>
    )
}
export default ActionButtonGroup