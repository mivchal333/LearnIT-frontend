import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {Button} from "@material-ui/core";
import {GET_ROUTE} from "../../../../route/routes";
import {useHistory} from "react-router-dom";
import {useRequireUserAttempt} from "../../../../hooks/useRequireUserAttempt";
import {useSelector} from "react-redux";
import {selectAnswerResult} from "../../../../store/quiz/quiz.slice";

const GameFinishedMessage = () => {
    const history = useHistory()
    const attemptId: string = useRequireUserAttempt()
    const answerResult = useSelector(selectAnswerResult)

    return (
        <MuiAlert
            severity={answerResult?.correct ? "success" : "error"}
            action={
                <Button
                    variant="outlined"
                    onClick={() => history.push(GET_ROUTE.GAME_ATTEMPT_SUMMARY(attemptId))}
                >
                    View Summary
                </Button>
            }
        >
            Incorrect answer. Game finished
        </MuiAlert>

    )
}
export default GameFinishedMessage