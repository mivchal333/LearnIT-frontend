import {useDispatch, useSelector} from "../store/store";
import {selectTechnology, setTechnologyContextId} from "../store/technologies/technologies.slice";
import {fetchTechnology} from "../store/technologies/actions";
import {useEffect} from "react";
import {Technology} from "../api/model/technology.model";
import {useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../route/route.model";
import {toNumber} from "lodash-es";

export const usePathTechnologyContext = (): [Technology, number] => {
    const dispatch = useDispatch()
    const {id: technologyIdString} = useParams<TechnologyRouteParam>()
    const technologyId = toNumber(technologyIdString);
    dispatch(setTechnologyContextId(technologyId))

    const technology = useSelector((state) => selectTechnology(state, technologyId))

    useEffect(() => {
        dispatch(fetchTechnology(technologyId))
    }, [])

    return [technology, technologyId]
}