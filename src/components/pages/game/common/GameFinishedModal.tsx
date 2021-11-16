import React from 'react'
import {useDispatch} from "../../../../store/store";
import {Button, makeStyles} from "@material-ui/core";
import ModalWrapper from "../../../modal/ModalWrapper";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../../route/routes";
import {Theme} from "@material-ui/core/styles";
import {closeModal} from "../../../../store/shared/page/page.slice";
import {Alert, AlertTitle} from "@material-ui/lab";
import {useRequireUserAttempt} from "../../../../hooks/useRequireUserAttempt";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        title: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        }
    }),
);

const GameFinishedModal = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const attemptId = useRequireUserAttempt()

    const [, technologyId] = usePathTechnologyContext();

    const onClose = () => {
        dispatch(closeModal());
        console.log({technologyId})
        history.push(GET_ROUTE.TECHNOLOGY(technologyId))
    }
    const onSubmit = () => {
        dispatch(closeModal());
        history.push(GET_ROUTE.GAME_ATTEMPT_SUMMARY(attemptId))
    }

    const Actions = () => (
        <>
            <Button
                variant="outlined"
                onClick={onSubmit}
            >
                Zobacz podsumowanie
            </Button>
            <Button onClick={onClose}>
                Zamknij
            </Button>
        </>
    )
    return (
        <ModalWrapper
            Actions={Actions()}
            Title="Success"
        >
            <Alert
                severity="success"
            >
                <AlertTitle>
                    Brawo
                </AlertTitle>
                Gra skończona. Zobacz podsumowanie
            </Alert>
        </ModalWrapper>
    )
}
export default GameFinishedModal