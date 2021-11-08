import {useDispatch, useSelector} from "../store/store";
import {selectTechnologyContextId} from "../store/technologies/technologies.slice";
import {useEffect} from "react";
import {loadUserHistory} from "../store/history/actions";
import {selectUserAttempts} from "../store/history/history.slice";
import {isEmpty} from "lodash-es";

const useLoadHistory = () => {
    const technologyId = useSelector(selectTechnologyContextId);
    const dispatch = useDispatch();
    const useAttempt = useSelector((state) => selectUserAttempts(state, technologyId));

    useEffect(() => {
        if (isEmpty(useAttempt)) {
            dispatch(loadUserHistory())
        }
    }, [])
}
export default useLoadHistory