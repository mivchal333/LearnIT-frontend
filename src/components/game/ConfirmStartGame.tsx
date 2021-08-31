import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {StartGameRouteParam} from "../../route/route.model";
import {useDispatch} from "react-redux";
import {setTechnologyId} from "../../store/game/game.slice";
import {toNumber} from "lodash-es";
import {Button} from "@material-ui/core";
import {GET_ROUTE} from "../../route/routes";

const ConfirmStartGame = () => {
    const {id} = useParams<StartGameRouteParam>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTechnologyId(toNumber(id)))
    }, [id])

    return (
        <div>
            you are about start game with technology id: {id}
            <Button to={GET_ROUTE.GAME_START_CONFIRM(id)} component={Link}>start!</Button>
        </div>
    )
}

export default ConfirmStartGame