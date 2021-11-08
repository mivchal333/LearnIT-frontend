import {useDispatch, useSelector} from "../store/store";
import {
    selectTechnology,
    selectTechnologyContextId,
    setTechnologyContextId
} from "../store/technologies/technologies.slice";
import {fetchTechnology} from "../store/technologies/actions";
import {useEffect} from "react";
import {Technology} from "../api/model/technology.model";
import {useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../route/route.model";
import {isNil, isNumber, toNumber} from "lodash-es";

export const usePathTechnologyContext = (): [Technology, number] => {
    const dispatch = useDispatch()
    const {id: technologyIdString} = useParams<TechnologyRouteParam>()
    const technologyId = toNumber(technologyIdString);

    const technologyContextId = useSelector(selectTechnologyContextId);
    const technology = useSelector((state) => selectTechnology(state, technologyContextId))

    useEffect(() => {
        if (isNumber(technologyId) && !isNaN(technologyId)) {
            dispatch(setTechnologyContextId(technologyId))
        }
    }, [technologyContextId])


    useEffect(() => {
        if (technologyId && isNil(technology)) {
            dispatch(fetchTechnology(technologyId))
        }
    }, [])

    return [technology, technologyContextId]
}