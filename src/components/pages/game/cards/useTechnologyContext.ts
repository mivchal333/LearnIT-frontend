import {useHistory, useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../../../../route/route.model";
import {toNumber} from "lodash-es";
import {setTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {useDispatch} from "../../../../store/store";
import {GET_ROUTE} from "../../../../route/routes";

export const useTechnologyContext = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {id: technologyId} = useParams<TechnologyRouteParam>()
    const technologyContextId = toNumber(technologyId);

    if (technologyContextId) {
        dispatch(setTechnologyContextId(technologyContextId))
    } else {
        history.push(GET_ROUTE.TECHNOLOGIES())
    }
}