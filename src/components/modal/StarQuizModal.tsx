import React from 'react'
import {useDispatch, useSelector} from "../../store/store";
import {Button, Typography} from "@material-ui/core";
import ModalWrapper from "./ModalWrapper";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../route/routes";
import {selectSelectedTechnologiesIds, selectTechnologyContextId} from "../../store/technologies/technologies.slice";
import {startAttempt} from "../../store/quiz/quiz.actions";
import {isNil} from "lodash-es";
import {errorFlag} from "../../service/flag.service";
import {addFlag, closeModal} from "../../store/shared/page/page.slice";
import {setGameTechnologiesIds} from "../../store/shared/game/game.slice";

const StartQuizModal = () => {
    const technologyId = useSelector(selectTechnologyContextId);
    const selectedTechnologiesIds = useSelector(selectSelectedTechnologiesIds)

    const dispatch = useDispatch()
    const history = useHistory()
    const onCancel = () => {
        dispatch(closeModal())
    }
    const onSubmit = async () => {
        try {
            const startTechIds = isNil(technologyId)
                ? selectedTechnologiesIds
                : [technologyId]

            await dispatch(setGameTechnologiesIds(startTechIds))
            await dispatch(startAttempt(startTechIds))
            dispatch(closeModal())
            history.push(GET_ROUTE.QUIZ_STARTED())
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