import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {StartGameRouteParam} from "../../route/route.model";
import {useDispatch} from "react-redux";
import {setTechnologyId} from "../../store/game/game.slice";
import {toNumber} from "lodash-es";
import {Button} from "@material-ui/core";
import {GET_ROUTE} from "../../route/routes";
import {startAttempt} from "../../store/game/actions";

const ConfirmStartGame = () => {
    const {id} = useParams<StartGameRouteParam>()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(setTechnologyId(toNumber(id)))
    }, [id])

    const onConfirm = async () => {
        await dispatch(startAttempt(toNumber(id)))
        history.push(GET_ROUTE.GAME_STARTED(id))
    }

    return (
        <div>
            you are about start game with technology id: {id}
            <Button onClick={onConfirm}>start!</Button>
        </div>
    )
}

export default ConfirmStartGame