import React from 'react'
import {useDispatch, useSelector} from "../../store/store";
import {Button, Typography} from "@material-ui/core";
import ModalWrapper from "./ModalWrapper";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../route/routes";
import {selectTechnologyContextId} from "../../store/technologies/technologies.slice";
import {startAttempt} from "../../store/quiz/quiz.actions";
import {toNumber} from "lodash-es";
import {errorFlag} from "../../service/flag.service";
import {addFlag, closeModal} from "../../store/shared/page/page.slice";

const StartQuizModal = () => {
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

    const Actions = () => (
        <>
            <Button
                onClick={onCancel}
            >
                Anuluj
            </Button>
            <Button
                startIcon={<PlayArrowIcon/>}
                onClick={onSubmit}
                variant="outlined"
            >
                Start
            </Button>
        </>

    )

    return (
        <ModalWrapper
            Title="Zacznij quiz!"
            Actions={Actions()}
        >
            <Typography variant="subtitle1" id="simple-modal-description">
                Czy na pewno chcesz rozpocząć quiz?
            </Typography>
        </ModalWrapper>
    )
}
export default StartQuizModal