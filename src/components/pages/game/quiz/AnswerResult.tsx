import React from 'react'
import {Button, Grid} from "@material-ui/core";
import SuccessAnswerMessage from "./SuccessAnswerMessage";
import WrongAnswerMessage from "./WrongAnswerMessage";
import {loadNextQuestionAction} from "../../../../store/quiz/quiz.actions";
import {useSelector} from "react-redux";
import {selectAnswerResult} from "../../../../store/quiz/quiz.slice";
import {useDispatch} from "../../../../store/store";
import {isNil} from "lodash-es";
import {selectHasNext} from "../../../../store/shared/game/game.slice";
import GameFinishedMessage from "./GameFinishedMessage";
import {useHistory} from "react-router-dom";
import {useRequireUserAttempt} from "../../../../hooks/useRequireUserAttempt";
import {GET_ROUTE} from "../../../../route/routes";

const AnswerResult = () => {
    const answerResult = useSelector(selectAnswerResult)
    const hasNext = useSelector(selectHasNext)
    const history = useHistory()
    let dispatch = useDispatch();
    const attemptId: string = useRequireUserAttempt()


    if (isNil(answerResult)) {
        return null;
    }

    return (
        <Grid container spacing={4} direction="column">
            <Grid item xs={6}>
                {answerResult.correct
                    ? <SuccessAnswerMessage/>
                    : <WrongAnswerMessage/>}
            </Grid>
            <Grid item xs={6}>
                {hasNext
                    ? (
                        <Button
                            variant="outlined"
                            onClick={() => dispatch(loadNextQuestionAction())}
                        >
                            Next Question
                        </Button>
                    )
                    : (
                        <Grid container spacing={4} direction="column">
                            <Grid item>
                                <GameFinishedMessage/>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={() => history.push(GET_ROUTE.GAME_ATTEMPT_SUMMARY(attemptId))}
                                >
                                    View summary
                                </Button>
                            </Grid>
                        </Grid>
                    )}
            </Grid>
        </Grid>
    )
}
export default AnswerResult