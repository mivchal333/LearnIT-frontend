import React from 'react'
import {Button, Grid} from "@material-ui/core";
import SuccessAnswerMessage from "./SuccessAnswerMessage";
import WrongAnswerMessage from "./WrongAnswerMessage";
import {loadNextQuestionAction} from "../../../../store/quiz/quiz.actions";
import {useSelector} from "react-redux";
import {selectAnswerResult} from "../../../../store/quiz/quiz.slice";
import {useDispatch} from "../../../../store/store";
import {isNil} from "lodash-es";

const AnswerResult = () => {
    const answerResult = useSelector(selectAnswerResult)
    let dispatch = useDispatch();


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
            <Grid item>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(loadNextQuestionAction())}
                >
                    Next Question
                </Button>
            </Grid>
        </Grid>
    )
}
export default AnswerResult