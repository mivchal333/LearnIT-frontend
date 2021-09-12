import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {StartGameRouteParam} from "../../../route/route.model";
import {useDispatch} from "react-redux";
import {toNumber} from "lodash-es";
import {Button} from "@material-ui/core";
import {GET_ROUTE} from "../../../route/routes";
import {startAttempt} from "../../../store/quiz/actions";
import {setTechnologyId} from "../../../store/game/game.slice";

const ConfirmStartCards = () => {
    const {id} = useParams<StartGameRouteParam>()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(setTechnologyId(toNumber(id)))
    }, [id])

    const onConfirm = async () => {
        await dispatch(startAttempt(toNumber(id)))
        history.push(GET_ROUTE.QUIZ_STARTED(id))
    }

    return (
        <div>
            you are about start cards game with technology id: {id}
            <Button onClick={onConfirm}>start!</Button>
        </div>
    )
}

export default ConfirmStartCards