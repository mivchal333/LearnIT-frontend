import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectAnswerResult, selectUserAttemptId} from "../../store/game/game.slice";
import {useDispatch} from "../../store/store";
import {fetchQuestion} from "../../store/game/actions";
import Question from "./Question";

const Game = () => {
    const userAttemptId = useSelector(selectUserAttemptId)
    const answerResult = useSelector(selectAnswerResult)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestion())
    }, [])


    return (
        <div>
            game started, userAttemptId: {userAttemptId}
            <Question/>

            {answerResult && (
                <h1>{answerResult.isCorrect ? "Success!" : "Fail!"}</h1>
            )}
        </div>
    )
}
export default Game