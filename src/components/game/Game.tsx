import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {resetAnswerResult, selectAnswerResult, selectUserAttemptId} from "../../store/game/game.slice";
import {useDispatch} from "../../store/store";
import {loadNextQuestion, loadQuestion} from "../../store/game/actions";
import Question from "./Question";
import {Button} from "@material-ui/core";

const Game = () => {
    const userAttemptId = useSelector(selectUserAttemptId)
    const answerResult = useSelector(selectAnswerResult)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadQuestion())
        return () => {
            dispatch(resetAnswerResult())
        }
    }, [])


    return (
        <div>
            game started, userAttemptId: {userAttemptId}

            <Question/>

            {answerResult && (
                <>
                    <h1>{answerResult.correct ? "Success!" : "Fail!"}</h1>
                    <Button onClick={() => dispatch(loadNextQuestion())}>Next Question</Button>
                </>
            )}
        </div>
    )
}
export default Game