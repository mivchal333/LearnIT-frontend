import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../../route/route.model";
import {selectTechnology} from "../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {RootState, useDispatch} from "../../store/store";
import {isEmpty, toNumber} from "lodash-es";
import {fetchTechnology} from "../../store/technologies/actions";

const TechnologyDetails = () => {
    const dispatch = useDispatch()
    const {id} = useParams<TechnologyRouteParam>()
    let technology = useSelector((state: RootState) => selectTechnology(state, toNumber(id)));

    useEffect(() => {

        if (isEmpty(technology)) {
            dispatch(fetchTechnology(toNumber(id)))
        }
    }, [])

    return <div>
        details: {technology}
    </div>
}
export default TechnologyDetails