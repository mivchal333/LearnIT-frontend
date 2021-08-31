import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectQuestion, selectUserAttemptId} from "../../store/game/game.slice";
import {useDispatch} from "../../store/store";
import {fetchQuestion} from "../../store/game/actions";

const Game = () => {
    const userAttemptId = useSelector(selectUserAttemptId)
    let dispatch = useDispatch();
    let question = useSelector(selectQuestion);
    useEffect(() => {
        dispatch(fetchQuestion())
    }, [])


    return (
        <div>
            game started, userAttemptId: {userAttemptId}
            {JSON.stringify(question)}
        </div>
    )
}
export default Game