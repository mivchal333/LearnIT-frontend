import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../../route/route.model";
import {selectTechnology} from "../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {RootState, useDispatch} from "../../store/store";
import {isEmpty, toNumber} from "lodash-es";
import {fetchTechnology} from "../../store/technologies/actions";
import {Button} from "@material-ui/core";
import {GET_ROUTE} from "../../route/routes";

const TechnologyDetails = () => {
    const dispatch = useDispatch()
    const {id} = useParams<TechnologyRouteParam>()
    let technology = useSelector((state: RootState) => selectTechnology(state, toNumber(id)));

    useEffect(() => {

        if (isEmpty(technology)) {
            dispatch(fetchTechnology(toNumber(id)))
        }
    }, [])

    if (isEmpty(technology)) {
        return <h1>Loading...</h1>
    }

    return <div>
        details: {JSON.stringify(technology)}
        <Button to={GET_ROUTE.GAME_START_CONFIRM(technology.id)} component={Link}>start!</Button>
    </div>
}
export default TechnologyDetails