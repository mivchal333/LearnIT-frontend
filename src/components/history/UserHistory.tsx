import React from "react";
import {Card} from "@material-ui/core";
import {useDispatch, useSelector} from "../../store/store";
import {selectUserAttempt} from "../../store/history/history.slice";
import {selectTechnologyId} from "../../store/game/game.slice";
import useLoadHistory from "../../hooks/useLoadHistory";


const UserHistory = () => {
    const dispatch = useDispatch();
    const technologyId = useSelector(selectTechnologyId);
    useLoadHistory()
    useSelector((state) => selectUserAttempt(state, technologyId))

    return (
        <Card>

        </Card>
    )
}
export default UserHistory