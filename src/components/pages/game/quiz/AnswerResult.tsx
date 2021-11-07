import React from 'react'
import {Grid} from "@material-ui/core";
import SuccessAnswerMessage from "./SuccessAnswerMessage";
import WrongAnswerMessage from "./WrongAnswerMessage";
import {useSelector} from "react-redux";
import {selectAnswerResult} from "../../../../store/quiz/quiz.slice";
import {isNil} from "lodash-es";
import GameFinishedMessage from "./GameFinishedMessage";
import {selectHasNext} from "../../../../store/shared/game/game.slice";

const AnswerResult = () => {
    const answerResult = useSelector(selectAnswerResult)
    const hasNext = useSelector(selectHasNext)

    if (isNil(answerResult)) {
        return null;
    }

    const getContent = () => {
        if (hasNext) {
            return answerResult.correct
                ? <SuccessAnswerMessage/>
                : <WrongAnswerMessage/>
        }
        return <GameFinishedMessage/>

    }

    return (
        <Grid container spacing={4} direction="column">
            <Grid item xs={6}>
                {getContent()}
            </Grid>
        </Grid>
    )
}
export default AnswerResult