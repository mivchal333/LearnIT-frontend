import {useDispatch, useSelector} from "../store/store";
import {selectTechnology, selectTechnologyContextId} from "../store/technologies/technologies.slice";
import {fetchTechnology} from "../store/technologies/actions";
import {useEffect} from "react";
import {Technology} from "../api/model/technology.model";

export const useTechnologyContext = (): Technology | null => {
    const dispatch = useDispatch()

    const technologyId = useSelector(selectTechnologyContextId) || 0
    const technology = useSelector((state) => selectTechnology(state, technologyId))

    useEffect(() => {
        if (!technology && technologyId) {
            dispatch(fetchTechnology(technologyId))
        }
    }, [])

    return technology
}