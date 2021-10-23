import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {resetAnswerResult, selectAnswerResult} from "../../../../store/quiz/quiz.slice";
import {useDispatch} from "../../../../store/store";
import {loadNextQuestion, loadQuestion} from "../../../../store/quiz/actions";
import Question from "./Question";
import {Button} from "@material-ui/core";
import {selectIsFinished, selectUserAttemptId} from "../../../../store/game/game.slice";
import SuccessAnswerMessage from "./SuccessAnswerMessage";
import WrongAnswerMessage from "./WrongAnswerMessage";
import GameFinishedCard from "../common/GameFinishedCard";
import ProgressTracker from "../common/ProgressTracker";

const QuizGame = () => {
    const userAttemptId = useSelector(selectUserAttemptId)
    const answerResult = useSelector(selectAnswerResult)
    const isFinished = useSelector(selectIsFinished)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadQuestion())
        return () => {
            dispatch(resetAnswerResult())
        }
    }, [])


    if (isFinished) {
        return <GameFinishedCard/>
    }

    return (
        <div>
            <ProgressTracker/>

            <Question/>

            {answerResult && (
                <>
                    {answerResult.correct
                        ? <SuccessAnswerMessage/>
                        : <WrongAnswerMessage/>}
                    <Button onClick={() => dispatch(loadNextQuestion())}>Next Question</Button>
                </>
            )}
        </div>
    )
}
export default QuizGame