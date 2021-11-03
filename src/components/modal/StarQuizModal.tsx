import React from 'react'
import {useDispatch, useSelector} from "../../store/store";
import {Button, makeStyles, Typography} from "@material-ui/core";
import ModalBodyWrapper from "./ModalBodyWrapper";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../route/routes";
import {Theme} from "@material-ui/core/styles";
import {selectTechnologyContextId} from "../../store/technologies/technologies.slice";
import {startAttempt} from "../../store/quiz/quiz.actions";
import {toNumber} from "lodash-es";
import {errorFlag} from "../../service/flag.service";
import {addFlag, closeModal} from "../../store/shared/page/page.slice";

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

const StartQuizModal = () => {
    const classes = useStyles();
    const technologyId = useSelector(selectTechnologyContextId);

    const dispatch = useDispatch()
    const history = useHistory()
    const onCancel = () => {
        dispatch(closeModal())
    }
    const onSubmit = async () => {
        try {
            await dispatch(startAttempt(toNumber(technologyId)))
            dispatch(closeModal())
            history.push(GET_ROUTE.QUIZ_STARTED(technologyId))
        } catch (e) {
            console.error(e);
            dispatch(addFlag(errorFlag("Unable to start attempt")))
        }
    }

    return (
        <ModalBodyWrapper>
            <>
                <Typography variant="h6" id="modal-title" className={classes.title}>
                    Play Quiz
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                    You are you sure you want to start quiz game?
                </Typography>
                <div className={classes.footer}>
                    <Button
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        startIcon={<PlayArrowIcon/>}
                        onClick={onSubmit}
                    >
                        Play
                    </Button>
                </div>

            </>
        </ModalBodyWrapper>
    )
}
export default StartQuizModal