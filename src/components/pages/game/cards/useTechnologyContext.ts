import {useHistory, useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../../../../route/route.model";
import {isEmpty, toNumber} from "lodash-es";
import {selectTechnology, setTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {useDispatch, useSelector} from "../../../../store/store";
import {GET_ROUTE} from "../../../../route/routes";
import {useEffect, useState} from "react";
import {fetchTechnology} from "../../../../store/technologies/actions";
import {Technology} from "../../../../api/model/technology.model";

export const useTechnologyContext = (): [Technology, number] => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isFetching, setIsFetching] = useState(false)

    const {id: technologyId} = useParams<TechnologyRouteParam>()
    const technologyContextId = toNumber(technologyId);

    if (!technologyContextId) {
        history.push(GET_ROUTE.TECHNOLOGIES())
    }

    dispatch(setTechnologyContextId(technologyContextId))

    const technology = useSelector((state) => selectTechnology(state, technologyContextId));
    useEffect(() => {

        const fetchProcess = async () => {
            if (isEmpty(technology) && !isFetching) {
                setIsFetching(true)
                await dispatch(fetchTechnology(technologyContextId))
                setIsFetching(false)
            }
        }
        fetchProcess()
    }, [])

    return [technology, technologyContextId]
}