import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {resetAnswerResult, selectAnswerResult} from "../../../store/quiz/quiz.slice";
import {useDispatch} from "../../../store/store";
import {loadNextQuestion, loadQuestion} from "../../../store/quiz/actions";
import Question from "./Question";
import {Button} from "@material-ui/core";
import {selectUserAttemptId} from "../../../store/game/game.slice";
import SuccessAnswerMessage from "./SuccessAnswerMessage";
import WrongAnswerMessage from "./WrongAnswerMessage";

const QuizGame = () => {
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