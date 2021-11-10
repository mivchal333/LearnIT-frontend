import {useDispatch, useSelector} from "../store/store";
import {selectTechnologyContextId} from "../store/technologies/technologies.slice";
import {useEffect} from "react";
import {loadUserCurrentHistory} from "../store/history/actions";
import {selectUserAttemptsByTechnologyId} from "../store/history/history.slice";
import {isEmpty} from "lodash-es";

const useLoadHistory = () => {
    const technologyId = useSelector(selectTechnologyContextId);
    const dispatch = useDispatch();
    const useAttempt = useSelector((state) => selectUserAttemptsByTechnologyId(state, technologyId));

    useEffect(() => {
        if (isEmpty(useAttempt)) {
            dispatch(loadUserCurrentHistory())
        }
    }, [])
}
export default useLoadHistory